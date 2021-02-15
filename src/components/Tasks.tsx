import React from "react";
import { Task } from "./Task";

interface Props {
  tasks: TaskInfo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export const Tasks: React.FC<Props> = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </div>
  );
};
