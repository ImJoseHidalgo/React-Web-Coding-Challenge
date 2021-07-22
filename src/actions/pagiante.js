import { types } from "../types/types";

export const setActualPage = (page) => {
  return {
    type: types.page,
    payload: page
  }
}