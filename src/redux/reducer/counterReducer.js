import { INCREASE_1, DECREASE_1, RESET } from "../action/actionType";
const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_1:
      return state + 1;
    case DECREASE_1:
      return state - 1;
    case RESET:
      return (state = 0);
    default:
      return state;
  }
};

export default reducer;
