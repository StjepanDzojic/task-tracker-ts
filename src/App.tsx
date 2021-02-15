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

  return (
    <div className="container">
        <Header title="Task tracker"/>
        <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
