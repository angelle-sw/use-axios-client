import { act, renderHook } from '@testing-library/react-hooks';
import axios, { AxiosStatic } from 'axios';
import useLazyAxios from './useLazyAxios';

interface AxiosMock extends AxiosStatic {
  mockResolvedValue: Function;
  mockRejectedValue: Function;
  mockRejectedValueOnce: Function;
}

jest.mock('axios');

const mockedAxios = axios as AxiosMock;
const { CancelToken } = axios;

beforeEach(() => {
  CancelToken.source = jest.fn().mockImplementation(() => ({
    cancel: jest.fn(),
    token: 'abc',
  }));
});

test('should return data state when axios request resolves', async () => {
  const responseData = 'fuschia';

  mockedAxios.mockResolvedValue({ data: responseData });

  const { result, waitForNextUpdate } = renderHook(() =>
    useLazyAxios({
      method: 'get',
      url: '/test',
    })
  );

  const getData = result.current[0];

  act(() => {
    getData();
  });

  expect(result.current[1].loading).toBe(true);

  await waitForNextUpdate();

  const { cancel, data, error, loading, refetch } = result.current[1];

  expect(cancel).toBeInstanceOf(Function);
  expect(data).toBe(data);
  expect(error).toBeUndefined();
  expect(loading).toBe(false);
  expect(refetch).toBeInstanceOf(Function);
});

test('should return data state when axios request resolves using url signature', async () => {
  const responseData = 'fuschia';

  mockedAxios.mockResolvedValue({ data: responseData });

  const { result, waitForNextUpdate } = renderHook(() =>
    useLazyAxios('/test', {
      method: 'get',
    })
  );

  const getData = result.current[0];

  act(() => {
    getData();
  });

  expect(result.current[1].loading).toBe(true);

  await waitForNextUpdate();

  const { cancel, data, error, loading, refetch } = result.current[1];

  expect(cancel).toBeInstanceOf(Function);
  expect(data).toBe(responseData);
  expect(error).toBeUndefined();
  expect(loading).toBe(false);
  expect(refetch).toBeInstanceOf(Function);
});

test('should return error state when axios request rejects', async () => {
  const responseError = new Error('error');

  mockedAxios.mockRejectedValue(responseError);

  const { result, waitForNextUpdate } = renderHook(() =>
    useLazyAxios({
      method: 'get',
      url: '/test',
    })
  );

  const getData = result.current[0];

  act(() => {
    getData();
  });

  expect(result.current[1].loading).toBe(true);

  await waitForNextUpdate();

  const { cancel, data, error, loading, refetch } = result.current[1];

  expect(cancel).toBeInstanceOf(Function);
  expect(data).toBeUndefined();
  expect(error).toBe(responseError);
  expect(loading).toBe(false);
  expect(refetch).toBeInstanceOf(Function);
});

test('should return error state when axios request rejects using url signature', async () => {
  const responseError = new Error('error');
  mockedAxios.mockRejectedValue(responseError);

  const { result, waitForNextUpdate } = renderHook(() =>
    useLazyAxios('/test', {
      method: 'get',
    })
  );

  const getData = result.current[0];

  act(() => {
    getData();
  });

  expect(result.current[1].loading).toBe(true);

  await waitForNextUpdate();

  const { cancel, data, error, loading, refetch } = result.current[1];

  expect(cancel).toBeInstanceOf(Function);
  expect(data).toBeUndefined();
  expect(error).toBe(responseError);
  expect(loading).toBe(false);
  expect(refetch).toBeInstanceOf(Function);
});

test('should return data state when refetch resolves', async () => {
  const error = new Error('error');
  const data = 'fuschia';

  mockedAxios.mockRejectedValueOnce(error).mockResolvedValue({ data });

  const { result, waitForNextUpdate } = renderHook(() =>
    useLazyAxios('/test', {
      method: 'get',
    })
  );

  const getData = result.current[0];

  act(() => {
    getData();
  });

  expect(result.current[1].loading).toBe(true);

  await waitForNextUpdate();

  expect(result.current[1].cancel).toBeInstanceOf(Function);
  expect(result.current[1].data).toBeUndefined();
  expect(result.current[1].error).toBe(error);
  expect(result.current[1].loading).toBe(false);
  expect(result.current[1].refetch).toBeInstanceOf(Function);

  act(() => {
    result.current[1].refetch();
  });

  await waitForNextUpdate();

  expect(result.current[1].cancel).toBeInstanceOf(Function);
  expect(result.current[1].data).toBe(data);
  expect(result.current[1].error).toBeUndefined();
  expect(result.current[1].loading).toBe(false);
  expect(result.current[1].refetch).toBeInstanceOf(Function);
});
