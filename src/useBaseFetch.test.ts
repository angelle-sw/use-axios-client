import { act, renderHook } from '@testing-library/react-hooks';
import axios, { AxiosStatic } from 'axios';
import useBaseFetch from './useBaseFetch';

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
  }));
});

test('loading is true before fetch resolves/rejects', () => {
  const source = CancelToken.source();
  const { result } = renderHook(() =>
    useBaseFetch({
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

test('data is truthy when fetch resolves', async () => {
  mockedAxios.mockResolvedValue({ data: {} });
  const source = CancelToken.source();

  const { result, waitForNextUpdate } = renderHook(() =>
    useBaseFetch({
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

test('error is truthy when fetch rejects', async () => {
  mockedAxios.mockRejectedValue(new Error('Error'));
  const source = CancelToken.source();

  const { result, waitForNextUpdate } = renderHook(() =>
    useBaseFetch({
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
