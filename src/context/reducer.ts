import { ACTION_TYPES } from "context/actions";
import { ActionType, AppDataType } from "types";

function reducer(state: AppDataType, action: ActionType) {
  switch (action.type) {
    case ACTION_TYPES.addTab:
      return state;

    default:
      console.log("Something is wrong, default state case!");
      return state;
  }
}

export default reducer;
