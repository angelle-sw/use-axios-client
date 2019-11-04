import { useReducer } from 'react';

export interface RequestState<Data> {
  data: Data | undefined;
  loading: boolean;
  error: Error | undefined;
}

type Action<Data> =
  | { type: 'REQUEST_INIT' }
  | { type: 'REQUEST_SUCCESS'; payload: Data }
  | { type: 'REQUEST_FAILED'; payload: Error };

export const initialState = {
  data: undefined,
  error: undefined,
  loading: false,
};

const createReducer = <Data>() => (
  state: RequestState<Data>,
  action: Action<Data>
  /* eslint-disable-next-line consistent-return */
): RequestState<Data> => {
  /* eslint-disable-next-line default-case */
  switch (action.type) {
    case 'REQUEST_INIT':
      return {
        ...state,
        error: undefined,
        loading: true,
      };
    case 'REQUEST_SUCCESS':
      return {
        ...state,
        data: action.payload,
        error: undefined,
        loading: false,
      };
    case 'REQUEST_FAILED':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
  }
};

export default <Data>() => useReducer(createReducer<Data>(), initialState);
