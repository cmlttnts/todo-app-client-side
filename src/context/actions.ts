import { ActionType, TodoType } from "types";

export const ACTION_TYPES = {
  addTab: "ADD_TAB",
  deleteTab: "DELETE_TAB",
  renameTab: "RENAME_TAB", // TODO: implement
  addTodo: "ADD_TODO",
  deleteTodo: "DELETE_TODO"
};

export function addTab(tabName: string): ActionType {
  return {
    type: ACTION_TYPES.addTab,
    payload: tabName
  };
}
export function deleteTab(tabName: string): ActionType {
  return {
    type: ACTION_TYPES.deleteTab,
    payload: tabName
  };
}
export function addTodo(parentTabName: string, todo: TodoType): ActionType {
  return {
    type: ACTION_TYPES.addTab,
    payload: { parentTabName, todo }
  };
}
export function deleteTodo(todo: TodoType): ActionType {
  return {
    type: ACTION_TYPES.addTab,
    payload: todo.id
  };
}
