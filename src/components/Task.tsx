import React from "react";
import DeleteButton from "./DeleteButton";

interface Props {
  key: number;
  task: TaskInfo;
  onDelete: (id: number) => void
}

export const Task: React.FC<Props> = ({ task, onDelete}) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <DeleteButton task={task} onDelete={onDelete}/>
    </div>
  );
};
