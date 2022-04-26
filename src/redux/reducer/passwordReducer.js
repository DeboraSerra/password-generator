import { ADD_PASSWORD, ADD_LENGTH } from '../actions';

const INITIAL_STATE = {
  password: '',
  passLength: 6,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_PASSWORD:
    return {
      ...state,
      password: action.payload,
    };
  case ADD_LENGTH:
    return {
      ...state,
      passLength: action.payload,
    };
  default:
    return state;
  }
};

export default reducer;
