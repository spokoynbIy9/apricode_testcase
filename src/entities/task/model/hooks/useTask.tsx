import { useContext } from "react";
import { TaskStore } from "../store/TaskStore";
import { TaskStoreContext } from "../store/TaskStoreProvider";

export const useTask = (): TaskStore => {
  const context = useContext(TaskStoreContext);
  if (!context) {
    throw new Error("");
  }
  return context;
};
