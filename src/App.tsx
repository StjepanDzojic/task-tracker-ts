import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import { Task } from "./Models/Types/Task";
import { TaskInfo } from "./Models/Types/TaskInfo";
import firebase from "./firebase";

const App: React.FC = () => {
  const [showAddTask, setShowAddTask] = useState<boolean>(true);
  const [tasks, setTasks] = useState<any[]>([]);
  const ref = firebase.firestore().collection("firebaseTasks");

  const getTasks = () => {
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setTasks(items);
    });
  };

  useEffect(() => {
    getTasks();
  }, [tasks]);

  const addTask = (task: Task) => {
    // const id = Math.floor(Math.random() * 10000) + 1;
    const id = Date.now()
    const newTask = { id, ...task };

    ref
      .doc(Date.now().toString())
      .set(newTask)
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteTask = (task: TaskInfo) => {
    ref
      .doc(task.text)
      .delete()
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleReminder = (task: TaskInfo) => {
    setTasks(
      tasks.map((item) =>
        item.id === task.id ? { ...item, reminder: !item.reminder } : item
      )
    )
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
