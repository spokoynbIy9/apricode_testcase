export interface Task {
  id: number;
  name: string;
  completed: boolean;
  subtasks: Task[];
}
