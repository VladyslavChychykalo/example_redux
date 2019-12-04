import { Type } from "./timerActions";

const stepReducer = (
  state = {
    value: 5,
    label: 5
  },
  actions
) => {
  switch (actions.type) {
    case Type.CHANGE_STEP:
      return actions.payload;

    default:
      return state;
  }
};

export default stepReducer;
