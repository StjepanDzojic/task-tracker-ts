import React from "react";
import DeleteButton from "./DeleteButton";
import ReminderButton from "./ReminderButton";

interface Props {
  key: number;
  task: TaskInfo;
  onDelete: (id: number) => void
  onToggle: (id: number) => void
}

export const Task: React.FC<Props> = ({ task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <DeleteButton task={task} onDelete={onDelete}/>
      <ReminderButton task={task} onToggle={onToggle} />
    </div>
  );
};
