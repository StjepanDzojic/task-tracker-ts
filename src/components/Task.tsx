import React from "react";

interface Props {
  key: number;
  task: TaskInfo;
}

export const Task: React.FC<Props> = ({ task }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
    </div>
  );
};
