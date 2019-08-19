import { act, renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import useBaseFetch from './useBaseFetch';

jest.mock('axios');

test('loading is true before fetch resolves/rejects', () => {
  const { result } = renderHook(() =>
    useBaseFetch({
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
  axios.mockResolvedValue({ data: {} });

  const { result, waitForNextUpdate } = renderHook(() =>
    useBaseFetch({
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
  axios.mockRejectedValue(new Error('Error'));

  const { result, waitForNextUpdate } = renderHook(() =>
    useBaseFetch({
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
