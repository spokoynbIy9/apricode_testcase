import { Stack, Typography } from "@mui/material";
import { TaskTree } from "../entities/task/ui/TaskTree/TaskTree";

function App() {
  return (
    <Stack alignItems="center">
      <Typography variant="h1">Task Tree</Typography>
      <TaskTree />
    </Stack>
  );
}

export default App;
