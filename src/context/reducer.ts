import { ACTION_TYPES } from "context/actions";
import { setAppData } from "localStorageUtils";
import clonedeep from "lodash.clonedeep";
import { AppDataType, isTabAction, isTodoAction, TabActionType, TodoActionType } from "types";

function reducer(state: AppDataType, action: TabActionType | TodoActionType) {
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
        console.log(newState);
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
    default:
      console.log("Something is wrong, default state case!");
      return state;
  }
  return state;
}

export default reducer;
