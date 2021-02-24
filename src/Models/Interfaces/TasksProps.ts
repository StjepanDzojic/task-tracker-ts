import { TaskInfo } from "../Types/TaskInfo";

export interface TasksProps {
    tasks: TaskInfo[];
    onDelete: (task: TaskInfo) => void;
    onToggle: (task: TaskInfo) => void;
  };