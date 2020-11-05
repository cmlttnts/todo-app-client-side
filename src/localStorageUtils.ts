import { AppDataType } from "types";

const APP_DATA_KEY = "appData";
const EMPTY_DATA: AppDataType = {
  tabs: []
};
export function getAppData(): AppDataType {
  const data = localStorage.getItem(APP_DATA_KEY);
  if (data != null) {
    return JSON.parse(data);
  }
  return EMPTY_DATA;
}

export function setAppData(appData: AppDataType) {
  let success;
  try {
    const str = JSON.stringify(appData);
    localStorage.setItem(APP_DATA_KEY, str);
    success = true;
  } catch (error) {
    console.log(error);
    success = false;
  }
  return success;
}

export function resetData() {
  setAppData(EMPTY_DATA);
  return EMPTY_DATA;
}
