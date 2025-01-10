import { createContext } from "react";
import { TaskStore } from "./TaskStore";

// eslint-disable-next-line react-refresh/only-export-components
export const TaskStoreContext = createContext<TaskStore | null>(null);

export const TaskStoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const Taskstore = new TaskStore();
  return (
    <TaskStoreContext.Provider value={Taskstore}>
      {children}
    </TaskStoreContext.Provider>
  );
};
