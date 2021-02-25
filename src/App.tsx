import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import { Task } from "./Models/Types/Task";
import { TaskInfo } from "./Models/Types/TaskInfo";
import firebase from "./firebase";
const ref = firebase.firestore().collection("firebaseTasks");

const App: React.FC = () => {
  const [showAddTask, setShowAddTask] = useState<boolean>(true);
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const getTasks = () => {
      ref.onSnapshot((querySnapshot) => {
        const items: React.SetStateAction<any[]> = [];
        querySnapshot.forEach((doc) => {
          let id = doc.id;
          let appObj = { ...doc.data(), id: id };
          items.push(appObj);
        });

        setTasks(items);
      });
    };
    console.log("da");
    getTasks();
  }, []);

  const addTask = (task: Task) => {
    ref.add(task).catch((error) => {
      console.error(error);
    });
  };

  const deleteTask = (task: TaskInfo) => {
    setTasks(
      tasks.map((item) =>
        item.id === task.id ? ref.doc(task.id.toString()).delete() : item
      )
    );
  };

  const toggleReminder = (task: TaskInfo) => {
    setTasks(
      tasks.map((item) =>
        item.id === task.id
          ? ref
              .doc(task.id.toString())
              .update({ ...item, reminder: !item.reminder })
          : item
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
