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
  appDispatch: React.Dispatch<TabActionType | TodoActionType>;
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

export function isTodoAction(action: TabActionType | TodoActionType): action is TodoActionType {
  return (action as TodoActionType).payload.parentTabName !== undefined;
}

export function isTabAction(action: TabActionType | TodoActionType): action is TabActionType {
  return typeof (action as TabActionType).payload === "string";
}
