import { act, renderHook } from '@testing-library/react-hooks';
import useAxiosReducer from './useAxiosReducer';

test('REQUEST_INIT action type returns loading state', () => {
  const { result } = renderHook(() => useAxiosReducer());

  const dispatch = result.current[1];

  act(() => {
    dispatch({ type: 'REQUEST_INIT' });
  });

  const { data, error, loading } = result.current[0];

  expect(data).toBe(null);
  expect(error).toBe(null);
  expect(loading).toBe(true);
});

test('REQUEST_SUCCESS action type returns data response', () => {
  const { result } = renderHook(() => useAxiosReducer());

  const dispatch = result.current[1];

  act(() => {
    dispatch({ type: 'REQUEST_SUCCESS', payload: {} });
  });

  const { data, error, loading } = result.current[0];

  expect(data).toEqual({});
  expect(error).toBe(null);
  expect(loading).toBe(false);
});

test('REQUEST_FAILED action type returns error response', () => {
  const { result } = renderHook(() => useAxiosReducer());

  const dispatch = result.current[1];

  act(() => {
    dispatch({ type: 'REQUEST_FAILED', payload: Error() });
  });

  const { data, error, loading } = result.current[0];

  expect(data).toBe(null);
  expect(error).toEqual(Error());
  expect(loading).toBe(false);
});
