import { types } from "../types/types"
import getData from "../services/getData";
import getDataById from "../services/getDataById";
import getDataCount from "../services/getDataCount";
import { startLoading, finishLoading } from "./loader";

export const getStolenBikes = (page, keyword) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const stolenBikes = await getData(page, keyword);
  
      dispatch(setStolenBikes(stolenBikes));
      dispatch(finishLoading());
    } catch (error) {
      console.log(error);
      dispatch(finishLoading());
      
    }
  }
}

export const setStolenBikes = (stolenBikes) => {
  return {
    type: types.bikes,
    payload: stolenBikes
  }
}

export const getStolenBikeById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const stolenBike = await getDataById(id);
  
      dispatch(setStolenBikeById(stolenBike));
      dispatch(finishLoading());
    } catch (error) {
      console.log(error);
      dispatch(finishLoading());
    }
  }
}

export const setStolenBikeById = (stolenBike) => {
  return {
    type: types.detail,
    payload: stolenBike
  }
}

export const getStolenCount = (keyword) => {
  return async (dispatch) => {
    const quantity = await getDataCount(keyword);

    dispatch(setStolenCount(quantity));
  }
}

export const setStolenCount = (quantity) => {
  return {
    type: types.quantity,
    payload: quantity
  }
}