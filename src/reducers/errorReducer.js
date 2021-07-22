import { types } from '../types/types';

const initialState = {
  error: false
}

export const errorReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.error:
      return {
        error: true
      }

    default:
      return state;
  }
}