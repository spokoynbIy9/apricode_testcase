import { observer } from "mobx-react-lite";
import { Task } from "../../model/types/Task";
import { Checkbox, FormLabel, Stack } from "@mui/material";
import { useTask } from "../../model/hooks/useTask";

interface TaskItemProps {
  task: Task;
  level: number;
}

export const TaskItem: React.FC<TaskItemProps> = observer(({ task, level }) => {
  const taskStore = useTask();

  const handleToggle = () => {
    taskStore.toggleTaskCompletion(task.id);
  };

  return (
    <Stack ml={`${level * 20}px`} fontSize={50}>
      <FormLabel>
        <Checkbox checked={task.completed} onChange={handleToggle} />
        {task.name}
      </FormLabel>
      {task.subtasks.map((subtask) => (
        <TaskItem key={subtask.id} task={subtask} level={level + 1} />
      ))}
    </Stack>
  );
});
