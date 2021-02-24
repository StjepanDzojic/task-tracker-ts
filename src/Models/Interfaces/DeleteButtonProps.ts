import { TaskInfo } from "../Types/TaskInfo";

export interface DeleteButtonProps{
    task: TaskInfo;
    onDelete: ( task: TaskInfo) => void;
};