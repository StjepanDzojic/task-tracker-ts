import { TaskInfo } from "../Types/TaskInfo";

export interface TaskProps {
    key: number;
    task: TaskInfo;
    onDelete: (id: number) => void
    onToggle: (id: number) => void
  };