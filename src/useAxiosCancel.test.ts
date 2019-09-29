import { act, renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import useAxiosCancel from './useAxiosCancel';

jest.mock('axios');

const { CancelToken } = axios;

test('creates new token on cancel', () => {
  let token = 0;

  CancelToken.source = jest.fn().mockImplementation(() => ({
    token: token++,
    cancel: () => {},
  }));

  const { result } = renderHook(() => useAxiosCancel());

  const initToken = result.current.cancelToken;

  act(() => {
    result.current.cancel();
  });

  expect(result.current.cancelToken).not.toBe(initToken);
});
