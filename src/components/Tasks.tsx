import React from "react";
import { Task } from "./Task";

interface Props {
  tasks: TaskInfo[];
}

export const Tasks: React.FC<Props> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
