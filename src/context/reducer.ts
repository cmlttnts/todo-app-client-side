import { ACTION_TYPES } from "context/actions";
import { resetData, setAppData } from "localStorageUtils";
import clonedeep from "lodash.clonedeep";
import {
  ActionType,
  AppDataType,
  isDeleteAllAction,
  isTabAction,
  isTodoAction,
  TabActionType
} from "types";

function reducer(state: AppDataType, action: ActionType) {
  console.log("state, action");
  console.log(state, action);

  let newState;
  switch (action.type) {
    case ACTION_TYPES.addTab:
      if (isTabAction(action)) {
        newState = clonedeep(state);
        const newTab = {
          name: action.payload,
          todos: []
        };
        newState.tabs.push(newTab);
        setAppData(newState);
        return newState;
      }
      break;
    case ACTION_TYPES.deleteTab:
      if (isTabAction(action)) {
        newState = clonedeep(state);
        const tabAction1 = action as TabActionType;
        newState.tabs.splice(
          newState.tabs.findIndex(tab => tab.name === tabAction1.payload),
          1
        );
        setAppData(newState);
        return newState;
      }
      break;
    case ACTION_TYPES.addTodo:
      if (isTodoAction(action)) {
        newState = clonedeep(state);
        newState.tabs
          .find(tab => tab.name === action.payload.parentTabName)
          ?.todos.push(action.payload.todo);
        setAppData(newState);
        return newState;
      }
      break;
    case ACTION_TYPES.deleteTodo:
      if (isTodoAction(action)) {
        newState = clonedeep(state);
        const parentTab = newState.tabs.find(tab => tab.name === action.payload.parentTabName);
        parentTab?.todos.splice(
          parentTab.todos.findIndex(todo => action.payload.todo.id === todo.id),
          1
        );
        setAppData(newState);
        return newState;
      }
      break;
    case ACTION_TYPES.deleteAllTabs:
      if (isDeleteAllAction(action)) {
        newState = resetData();
        return newState;
      }
      break;
    default:
      console.log("!!! DEFAULT state case!");
      return state;
  }
  console.log("!!! OUTSIDE SWITCH!");
  return state;
}

export default reducer;
