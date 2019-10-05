import { GET_ERRORS } from '../actions/types';

const initialState = {
  message: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
}
