import React from "react";
import { Task } from "./Task";
import { TasksProps } from "../Models/Interfaces/TasksProps";

export const Tasks: React.FC<TasksProps> = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};
