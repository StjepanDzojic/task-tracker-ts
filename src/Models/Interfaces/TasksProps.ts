import { TaskInfo } from "../Types/TaskInfo";

export interface TasksProps {
    tasks: TaskInfo[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
  };