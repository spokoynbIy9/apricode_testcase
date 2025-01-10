import { observer } from "mobx-react-lite";
import { TaskItem } from "../TaskItem/TaskItem";
import { Stack } from "@mui/material";
import { useTask } from "../../model/hooks/useTask";

export const TaskTree: React.FC = observer(() => {
  const taskStore = useTask();

  return (
    <Stack>
      {taskStore.tasks.map((task) => (
        <TaskItem key={task.id} task={task} level={0} />
      ))}
    </Stack>
  );
});
