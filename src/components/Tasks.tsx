import React from "react";
import { Task } from "./Task";

interface Props {
  tasks: TaskInfo[];
  onDelete: (id: number) => void;
}

export const Tasks: React.FC<Props> = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete}/>
      ))}
    </div>
  );
};
