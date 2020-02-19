import {
  COUNTRIES_REQUEST, COUNTRIES_REQUEST_SUCCESS, COUNTRIES_REQUEST_CANCEL, COUNTRIES_REQUEST_CANCELED
} from './types';

const initialState = {
  loading: false,
  loaded: false,
  list: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES_REQUEST:
      return { ...state, list: [], loading: true, loaded: false };
    case COUNTRIES_REQUEST_SUCCESS:
      return { ...state, list: action.list, loading: false, loaded: true };
    case COUNTRIES_REQUEST_CANCEL:
    case COUNTRIES_REQUEST_CANCELED:
      return { ...state, list: [], loading: false, loaded: false };
    default:
      return state;
  }
};

export default reducer;