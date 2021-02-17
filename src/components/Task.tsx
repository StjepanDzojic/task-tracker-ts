import React from "react";
import { TaskProps } from "../Models/Interfaces/TaskProps";
import DeleteButton from "./DeleteButton";
import ReminderButton from "./ReminderButton";

export const Task: React.FC<TaskProps> = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <DeleteButton task={task} onDelete={onDelete} />
      <ReminderButton task={task} onToggle={onToggle} />
    </div>
  );
};
