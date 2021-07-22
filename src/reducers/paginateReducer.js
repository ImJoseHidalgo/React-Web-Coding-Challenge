import { types } from '../types/types';

const initialState = {
  page: 1
}

export const paginateReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.page:
      return {
        page: action.payload
      }

    default:
      return state;
  }
}