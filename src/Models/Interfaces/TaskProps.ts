import { TaskInfo } from "../Types/TaskInfo";

export interface TaskProps {
    key: number;
    task: TaskInfo;
    onDelete: (task: TaskInfo) => void
    onToggle: (task: TaskInfo) => void
  };