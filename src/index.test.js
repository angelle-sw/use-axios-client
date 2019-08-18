import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import { useFetch } from '.';

jest.mock('axios');

describe('useFetch hook', () => {
  test('loading is truthy before fetch resolves/rejects', () => {
    const { result } = renderHook(() =>
      useFetch({
        method: 'get',
        url: '/test',
      })
    );

    expect(result.current.data).toBeFalsy();
    expect(result.current.error).toBeFalsy();
    expect(result.current.loading).toBeTruthy();
  });

  test('data is truthy when fetch resolves', async () => {
    axios.mockResolvedValue({ data: {} });

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch({
        method: 'get',
        url: '/test',
      })
    );

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeFalsy();
    expect(result.current.data).toBeTruthy();
  });

  test('error is truthy when fetch rejects', async () => {
    axios.mockRejectedValue(new Error('Error'));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch({
        method: 'get',
        url: '/test',
      })
    );

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
    expect(result.current.data).toBeFalsy();
    expect(result.current.error).toBeTruthy();
  });
});
