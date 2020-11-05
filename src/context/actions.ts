import { TabActionType, TodoActionType, TodoType } from "types";

export const ACTION_TYPES = {
  addTab: "ADD_TAB",
  deleteTab: "DELETE_TAB",
  renameTab: "RENAME_TAB", // TODO: implement
  addTodo: "ADD_TODO",
  deleteTodo: "DELETE_TODO",
  deleteAllTabs: "DELETE_ALL_TABS"
};

export function addTab(tabName: string): TabActionType {
  return {
    type: ACTION_TYPES.addTab,
    payload: tabName
  };
}
export function deleteTab(tabName: string): TabActionType {
  return {
    type: ACTION_TYPES.deleteTab,
    payload: tabName
  };
}
export function addTodo(parentTabName: string, todo: TodoType): TodoActionType {
  return {
    type: ACTION_TYPES.addTab,
    payload: { parentTabName, todo }
  };
}
export function deleteTodo(parentTabName: string, todo: TodoType): TodoActionType {
  return {
    type: ACTION_TYPES.addTab,
    payload: { parentTabName, todo }
  };
}
