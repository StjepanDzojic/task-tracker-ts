import { TaskInfo } from "../Types/TaskInfo";

export interface DeleteButtonProps{
    task: TaskInfo;
    onDelete: ( id: number) => void;
};