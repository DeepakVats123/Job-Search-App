import { addDataToStore } from "./actionTypes";

export const addDataToCartAction = (data, dispatch) =>{
    dispatch({
        type : addDataToStore,
        payload : data
    })
}