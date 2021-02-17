import { TaskInfo } from "../Types/TaskInfo";

export interface ReminderButtonProps{
    task: TaskInfo;
    onToggle: (id: number) => void;
}