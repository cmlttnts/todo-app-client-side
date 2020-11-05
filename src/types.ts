export type TodoType = {
  title: string;
  done: boolean;
  detail: string;
  id: number;
};

export type TabType = {
  name: string;
  todos: Array<TodoType>;
};

export type AppDataType = {
  tabs: Array<TabType>;
};

export type AppContextType = {
  appData: AppDataType;
  appDispatch: React.Dispatch<ActionType>;
};

export type TabActionType = {
  type: string;
  payload: string;
};

export type TodoActionType = {
  type: string;
  payload: {
    parentTabName: string;
    todo: TodoType;
  };
};

export type DeleteAllActionType = {
  type: string;
  payload: null;
};

export type ActionType = TabActionType | TodoActionType | DeleteAllActionType;

export function isTodoAction(action: ActionType): action is TodoActionType {
  return (action as TodoActionType).payload.parentTabName !== undefined;
}

export function isTabAction(action: ActionType): action is TabActionType {
  return typeof (action as TabActionType).payload === "string";
}

export function isDeleteAllAction(action: ActionType): action is DeleteAllActionType {
  return (action as DeleteAllActionType).payload === null;
}
