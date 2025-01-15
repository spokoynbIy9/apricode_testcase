import { makeAutoObservable } from "mobx";
import { Task } from "../types/Task";

export class TaskStore {
  tasks: Task[] = [
    { id: 1, name: "Task 1", completed: false, subtasks: [] },
    {
      id: 2,
      name: "Task 2",
      completed: false,
      subtasks: [
        {
          id: 3,
          name: "Subtask 2.1",
          completed: false,
          subtasks: [
            { id: 4, name: "Subtask 2.1.1", completed: false, subtasks: [] },
            { id: 5, name: "Subtask 2.1.2", completed: true, subtasks: [] },
          ],
        },
        { id: 6, name: "Subtask 2.2", completed: true, subtasks: [] },
      ],
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  toggleTaskCompletion(taskId: number) {
    const findTask = (tasks: Task[]): Task | null => {
      for (const task of tasks) {
        if (task.id === taskId) return task;
        const subtask = findTask(task.subtasks);
        if (subtask) return subtask;
      }
      return null;
    };

    const toggle = (task: Task, completed: boolean) => {
      task.completed = completed;
      task.subtasks.forEach((subtask) => toggle(subtask, completed));
    };

    const task = findTask(this.tasks);
    if (task) {
      toggle(task, !task.completed);
      this.updateParentCompletion(this.tasks);
    }
  }

  private updateParentCompletion(tasks: Task[]) {
    const update = (task: Task) => {
      if (task.subtasks.length > 0) {
        task.subtasks.forEach((subtask) => update(subtask));

        const allSubtasksCompleted = task.subtasks.every(
          (subtask) => subtask.completed
        );
        task.completed = allSubtasksCompleted;
      }
    };

    tasks.forEach((task) => update(task));
  }
}
