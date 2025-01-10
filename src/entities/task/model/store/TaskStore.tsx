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
            { id: 5, name: "Subtask 2.1.2", completed: false, subtasks: [] },
          ],
        },
        { id: 6, name: "Subtask 2.2", completed: false, subtasks: [] },
      ],
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  toggleTaskCompletion(taskId: number) {
    const toggle = (tasks: Task[]) => {
      tasks.forEach((task) => {
        if (task.id === taskId) {
          task.completed = !task.completed;
          task.subtasks.forEach(
            (subtask) => (subtask.completed = task.completed)
          );
        } else {
          toggle(task.subtasks);
        }
      });
    };
    toggle(this.tasks);
  }

  updateParentCompletion(taskId: number) {
    const update = (tasks: Task[]) => {
      tasks.forEach((task) => {
        if (task.subtasks.some((subtask) => subtask.id === taskId)) {
          task.completed = task.subtasks.every((subtask) => subtask.completed);
        }
        update(task.subtasks);
      });
    };
    update(this.tasks);
  }
}
