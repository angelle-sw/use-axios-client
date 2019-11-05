import { act, renderHook } from '@testing-library/react-hooks';
import axios, { AxiosStatic } from 'axios';
import useBaseAxios, { Config } from './useBaseAxios';

interface AxiosMock extends AxiosStatic {
  mockResolvedValue: Function;
  mockRejectedValue: Function;
  mockImplementation: Function;
}

jest.mock('axios');

const mockedAxios = axios as AxiosMock;
const { CancelToken } = axios;

beforeEach(() => {
  CancelToken.source = jest.fn().mockImplementation(() => ({
    token: 'abc',
    cancel: () => {},
  }));
});

test('should load while axios request is pending', async () => {
  mockedAxios.mockResolvedValue({ data: {} });

  const { result, waitForNextUpdate } = renderHook(() =>
    useBaseAxios({
      method: 'get',
      url: '/test',
    })
  );

  const getData = result.current[0];

  act(() => {
    getData();
  });

  const { data, error, loading } = result.current[1];

  expect(data).toBeUndefined();
  expect(error).toBeUndefined();
  expect(loading).toBe(true);

  await waitForNextUpdate();
});

test('should return data when axios request resolves', async () => {
  mockedAxios.mockResolvedValue({ data: {} });

  const { result, waitForNextUpdate } = renderHook(() =>
    useBaseAxios({
      method: 'get',
      url: '/test',
    })
  );

  const getData = result.current[0];

  act(() => {
    getData();
  });

  await waitForNextUpdate();

  const { data, error, loading } = result.current[1];

  expect(data).toEqual({});
  expect(error).toBeUndefined();
  expect(loading).toBe(false);
});

test('should return data when axios request resolves with url signature', async () => {
  mockedAxios.mockResolvedValue({ data: {} });

  const { result, waitForNextUpdate } = renderHook(() =>
    useBaseAxios('/test', {
      method: 'get',
    })
  );

  const getData = result.current[0];

  act(() => {
    getData();
  });

  await waitForNextUpdate();

  const { data, error, loading } = result.current[1];

  expect(data).toEqual({});
  expect(error).toBeUndefined();
  expect(loading).toBe(false);
});

test('should return error when axios request rejects', async () => {
  const errorResponse = new Error('Error');
  mockedAxios.mockRejectedValue(errorResponse);

  const { result, waitForNextUpdate } = renderHook(() =>
    useBaseAxios({
      method: 'get',
      url: '/test',
    })
  );

  const getData = result.current[0];

  act(() => {
    getData();
  });

  await waitForNextUpdate();

  const { data, error, loading } = result.current[1];

  expect(data).toBeUndefined();
  expect(error).toBe(errorResponse);
  expect(loading).toBe(false);
});

test('request is cancelled on unmount', () => {
  const cancel = jest.fn();

  CancelToken.source = jest.fn().mockImplementation(() => ({
    token: 'abc',
    cancel,
  }));

  mockedAxios.mockResolvedValue({ data: {} });

  const { result, unmount } = renderHook(() =>
    useBaseAxios({
      method: 'get',
      url: '/test',
    })
  );

  const getData = result.current[0];

  act(() => {
    getData();
  });

  act(() => {
    unmount();
  });

  const { data, error, loading } = result.current[1];

  expect(cancel).toHaveBeenCalled();
  expect(data).toBeUndefined();
  expect(error).toBeUndefined();
  expect(loading).toBe(true);
});

test('request data is passed via lazy callback', async () => {
  const color = 'fuschia';

  mockedAxios.mockImplementation((config: Config) => {
    if (config.data) {
      return Promise.resolve({ data: { color } });
    }
    return Promise.resolve({ data: {} });
  });

  const { result, waitForNextUpdate } = renderHook(() =>
    useBaseAxios({
      method: 'post',
      url: '/test',
    })
  );

  const getData = result.current[0];

  act(() => {
    getData();
  });

  await waitForNextUpdate();

  expect(result.current[1].data).toEqual({});

  act(() => {
    getData({ color });
  });

  await waitForNextUpdate();

  expect(result.current[1].data).toEqual({ color });
});

test('should use axios instance', async () => {
  mockedAxios.mockResolvedValue({ data: 1 });

  mockedAxios.create = jest.fn().mockImplementation(() => () => ({ data: 2 }));

  const axiosInstance = mockedAxios.create();

  const { result, waitForNextUpdate } = renderHook(() =>
    useBaseAxios({
      url: '/test',
      axiosInstance,
    })
  );

  const getData = result.current[0];

  act(() => {
    getData();
  });

  await waitForNextUpdate();

  expect(result.current[1].data).toEqual(2);
});
