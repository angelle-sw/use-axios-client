import { act, renderHook } from '@testing-library/react-hooks';
import axios, { AxiosStatic } from 'axios';
import useAxios from './useAxios';
import { Config } from './useBaseAxios';

interface AxiosMock extends AxiosStatic {
  mockResolvedValue: Function;
  mockRejectedValue: Function;
  mockRejectedValueOnce: Function;
  mockImplementation: Function;
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
    useAxios({
      method: 'get',
      url: '/test',
    })
  );

  expect(result.current.loading).toBe(true);

  await waitForNextUpdate();

  const { cancel, data, error, loading, refetch } = result.current;

  expect(cancel).toBeInstanceOf(Function);
  expect(data).toBe(responseData);
  expect(error).toBeUndefined();
  expect(loading).toBe(false);
  expect(refetch).toBeInstanceOf(Function);
});

test('should return data state when axios request resolves using url signature', async () => {
  const responseData = 'fuschia';

  mockedAxios.mockResolvedValue({ data: responseData });

  const { result, waitForNextUpdate } = renderHook(() =>
    useAxios('/test', {
      method: 'get',
    })
  );

  expect(result.current.loading).toBe(true);

  await waitForNextUpdate();

  const { cancel, data, error, loading, refetch } = result.current;

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
    useAxios({
      method: 'get',
      url: '/test',
    })
  );

  expect(result.current.loading).toBe(true);

  await waitForNextUpdate();

  const { cancel, data, error, loading, refetch } = result.current;

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
    useAxios('/test', {
      method: 'get',
    })
  );

  expect(result.current.loading).toBe(true);

  await waitForNextUpdate();

  const { cancel, data, error, loading, refetch } = result.current;

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
    useAxios('/test', {
      method: 'get',
    })
  );

  expect(result.current.loading).toBe(true);

  await waitForNextUpdate();

  expect(result.current.cancel).toBeInstanceOf(Function);
  expect(result.current.data).toBeUndefined();
  expect(result.current.error).toBe(error);
  expect(result.current.loading).toBe(false);
  expect(result.current.refetch).toBeInstanceOf(Function);

  act(() => {
    result.current.refetch();
  });

  await waitForNextUpdate();

  expect(result.current.cancel).toBeInstanceOf(Function);
  expect(result.current.data).toBe(data);
  expect(result.current.error).toBeUndefined();
  expect(result.current.loading).toBe(false);
  expect(result.current.refetch).toBeInstanceOf(Function);
});

test('should return updated state when axios config changes', async () => {
  const data1 = 'fuschia';
  const data2 = 'cerulean';
  const url1 = '/test/1';
  const url2 = '/test/2';

  mockedAxios.mockImplementation((config: Config) => {
    if (config.url === url1) {
      return Promise.resolve({ data: data1 });
    }
    return Promise.resolve({ data: data2 });
  });

  const { rerender, result, waitForNextUpdate } = renderHook(
    ({ url }) =>
      useAxios({
        url,
        method: 'get',
      }),
    { initialProps: { url: url1 } }
  );

  expect(result.current.loading).toBe(true);

  await waitForNextUpdate();

  expect(result.current.cancel).toBeInstanceOf(Function);
  expect(result.current.data).toBe(data1);
  expect(result.current.error).toBeUndefined();
  expect(result.current.loading).toBe(false);
  expect(result.current.refetch).toBeInstanceOf(Function);

  rerender({ url: url2 });

  expect(result.current.loading).toBe(true);

  await waitForNextUpdate();

  expect(result.current.cancel).toBeInstanceOf(Function);
  expect(result.current.data).toBe(data2);
  expect(result.current.error).toBeUndefined();
  expect(result.current.loading).toBe(false);
  expect(result.current.refetch).toBeInstanceOf(Function);
});
