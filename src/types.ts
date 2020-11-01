export type TodoType = {
  title: string;
  done: boolean;
  detail: string;
  id: number;
};

export type TabType = Array<TodoType>;

export type AppDataType = {
  tabs: Array<TabType>;
} | null;

export type ActionType = {
  type: string;
  payload?: any;
};
