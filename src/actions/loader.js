import { types } from '../types/types';

export const startLoading = () => {
  return {
    type: types.startLoading
  }
}
export const finishLoading = () => {
  return {
    type: types.finishLoading
  }
}

export const startCountLoading = () => {
  return {
    type: types.startCountLoading
  }
}
export const finishCountLoading = () => {
  return {
    type: types.finishCountLoading
  }
}