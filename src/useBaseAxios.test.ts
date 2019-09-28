import { act, renderHook } from '@testing-library/react-hooks';
import axios, { AxiosStatic } from 'axios';
import useBaseAxios from './useBaseAxios';

interface AxiosMock extends AxiosStatic {
  mockResolvedValue: Function;
  mockRejectedValue: Function;
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

test.skip('loading is true before axios request resolves/rejects', () => {
  const source = CancelToken.source();
  const { result } = renderHook(() =>
    useBaseAxios({
      cancelToken: source.token,
      method: 'get',
      url: '/test',
    })
  );

  const getData = result.current[0];

  act(() => {
    getData();
  });

  const { data, error, loading } = result.current[1];

  expect(data).toBeFalsy();
  expect(error).toBeFalsy();
  expect(loading).toBe(true);
});

test.skip('data is truthy when axios request resolves', async () => {
  mockedAxios.mockResolvedValue({ data: {} });
  const source = CancelToken.source();

  const { result, waitForNextUpdate } = renderHook(() =>
    useBaseAxios({
      cancelToken: source.token,
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

  expect(data).toBeTruthy();
  expect(error).toBeFalsy();
  expect(loading).toBe(false);
});

test.skip('error is truthy when axios request rejects', async () => {
  mockedAxios.mockRejectedValue(new Error('Error'));
  const source = CancelToken.source();

  const { result, waitForNextUpdate } = renderHook(() =>
    useBaseAxios({
      cancelToken: source.token,
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

  expect(data).toBeFalsy();
  expect(error).toBeTruthy();
  expect(loading).toBe(false);
});

test('request is cancelled on unmount', () => {
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

  const { data, loading } = result.current[1];

  expect(data).toBe(null);
  expect(loading).toBe(true);
});
