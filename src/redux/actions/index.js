export const ADD_PASSWORD = 'ADD_PASSWORD';
export const ADD_LENGTH = 'ADD_LENGTH';

export const addPassword = (payload) => ({
  type: ADD_PASSWORD,
  payload,
});

export const addLength = (payload) => ({
  type: ADD_LENGTH,
  payload,
});
