import React, { useState } from "react";
import { Identifier } from "typescript";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";

declare global {
  interface TaskInfo {
    id: number;
    text: string;
    day: string;
    reminder: boolean;
  }
}
const App: React.FC = () => {
  const [showAddTask, setShowAddTask] = useState<boolean>(true);
  const [tasks, setTasks] = useState<TaskInfo[]>([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th",
      reminder: true,
    },
    {
      id: 3,
      text: "Shopping",
      day: "Feb 7th",
      reminder: false,
    },
    {
      id: 2,
      text: "Meeting",
      day: "Feb 6th",
      reminder: true,
    },
  ]);

  const addTask = (task: { text: string; day: string; reminder: boolean }) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        title="Task tracker"
        onShow={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
};

export default App;
