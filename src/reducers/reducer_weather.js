import { FETCH_WHEATHER } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WHEATHER:
      return [action.payload.data, ...state];
  }
  return state;
};
