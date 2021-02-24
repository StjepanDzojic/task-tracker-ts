import { TaskInfo } from "../Types/TaskInfo";

export interface ReminderButtonProps{
    task: TaskInfo;
    onToggle: (task: TaskInfo) => void;
};