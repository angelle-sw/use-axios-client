export interface RequestState<Data> {
  data: Data | null;
  loading: boolean;
  error: Error | null;
}

type Action<Data> =
  | { type: 'REQUEST_INIT' }
  | { type: 'REQUEST_SUCCESS'; payload: Data }
  | { type: 'REQUEST_FAILED'; payload: Error };

export const initialState = {
  data: null,
  error: null,
  loading: false,
};

export default <Data>() => (
  state: RequestState<Data>,
  action: Action<Data>
): RequestState<Data> => {
  switch (action.type) {
    case 'REQUEST_INIT':
      return {
        ...state,
        data: null,
        error: null,
        loading: true,
      };
    case 'REQUEST_SUCCESS':
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    case 'REQUEST_FAILED':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      throw new Error('Unknown Error');
  }
};
