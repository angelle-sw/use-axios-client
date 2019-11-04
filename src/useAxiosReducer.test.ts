import { act, renderHook } from '@testing-library/react-hooks';
import useAxiosReducer from './useAxiosReducer';

test('REQUEST_INIT action type returns loading state', () => {
  const { result } = renderHook(() => useAxiosReducer());

  const dispatch = result.current[1];

  act(() => {
    dispatch({ type: 'REQUEST_INIT' });
  });

  const { data, error, loading } = result.current[0];

  expect(data).toBeUndefined();
  expect(error).toBeUndefined();
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
  expect(error).toBeUndefined();
  expect(loading).toBe(false);
});

test('REQUEST_FAILED action type returns error response', () => {
  const { result } = renderHook(() => useAxiosReducer());

  const dispatch = result.current[1];

  act(() => {
    dispatch({ type: 'REQUEST_FAILED', payload: Error() });
  });

  const { data, error, loading } = result.current[0];

  expect(data).toBeUndefined();
  expect(error).toEqual(Error());
  expect(loading).toBe(false);
});

test('sets data and error to default parameter', () => {
  const defaultData = { name: 'salmon', color: '#FA8072' };

  const { result } = renderHook(() => useAxiosReducer());

  const dispatch = result.current[1];

  act(() => {
    dispatch({ type: 'REQUEST_INIT' });
  });

  const { data = defaultData, error = [], loading } = result.current[0];

  expect(data).toEqual(defaultData);
  expect(error).toEqual([]);
  expect(loading).toBe(true);
});
