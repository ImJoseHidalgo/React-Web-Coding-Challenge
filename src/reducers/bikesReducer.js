import { types } from '../types/types';

const initialState = {
  quantity: [],
  bikes: [],
  detail: []
}

export const bikesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.bikes:
      return {
        ...state,
        bikes: action.payload
      }
    case types.detail:
      return {
        ...state,
        detail: action.payload
      }
    case types.quantity:
      return {
        ...state,
        quantity: action.payload
      }
      
    default:
      return state;
  }
}