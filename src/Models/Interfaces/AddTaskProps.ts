import { Task } from "../Types/Task";

export interface AddTaskProps {
    onAdd: (task: Task) => void;
  };