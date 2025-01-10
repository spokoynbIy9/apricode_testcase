import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { TaskStoreProvider } from "./entities/task/model/store/TaskStoreProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TaskStoreProvider>
      <App />
    </TaskStoreProvider>
  </StrictMode>
);
