import { INCREASE_1, DECREASE_1, RESET } from "./actionType";

export const increaseOne = () => {
  return (dispatch) => {
    dispatch({
      type: INCREASE_1,
    });
  };
};

export const decreaseOne = () => {
  return (dispatch) => {
    dispatch({
      type: DECREASE_1,
    });
  };
};

export const reset = () => {
  return (dispatch) => {
    dispatch({
      type: RESET,
    });
  };
};
