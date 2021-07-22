import { types } from '../types/types';

const initialState = {
  loading: false,
  countLoading: false,
}

export const loadingReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.startLoading:
      return {
        ...state,
        loading: true
      }
    case types.finishLoading:
      return {
        ...state,
        loading: false
      }
    case types.startCountLoading:
      return {
        ...state,
        countLoading: true
      }
    case types.finishCountLoading:
      return {
        ...state,
        countLoading: false
      }

    default:
      return state;
  }
}