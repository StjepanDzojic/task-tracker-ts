import React, {useState} from 'react';
import { Identifier } from 'typescript';
import Header from './components/Header';
import { Tasks } from './components/Tasks';

declare global {
  interface TaskInfo{
    id: number;
    text: string; 
    day: string;
    reminder: boolean;
  }
}
const App: React.FC = () => {
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
        <Header title="Task tracker"/>
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
