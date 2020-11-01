import { AppDataType } from "types";

export function getAppData(): AppDataType {
  const data = localStorage.getItem("appData");
  if (data != null) {
    return JSON.parse(data);
  }
  return { tabs: [] };
}

export function setAppData(appData: AppDataType) {
  let success;
  try {
    const str = JSON.stringify(appData);
    localStorage.setItem("appData", str);
    success = true;
  } catch (error) {
    console.log(error);
    success = false;
  }
  return success;
}
