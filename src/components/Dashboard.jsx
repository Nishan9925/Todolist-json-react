import axios from "axios";
import { AddTask } from "./AddTask";
import { Stats } from "./Stats";
import { TaskList } from "./TaskList";
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  
  const addTask = task => {
    setTasks([...tasks, task]);
  } 

  useEffect(() => {
    axios
    .get("http://localhost:3004/tasks")
    .then((res) => {
      console.log(res.data);
      setTasks(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    setTasks (tasks.filter(task => task.id != id))
  }

  const statusUpdate = (id, status) => {
    axios
    .patch("http://localhost:3004/tasks/" + id, {tasks})
    .then(res => {
      const updatedTasks = tasks.map(task => task.id === id? {...task, status}: task);
      setTasks(updatedTasks);
    })
  }
  return (
    <div className="dashboard">
      <div className="row">
        <TaskList
            tasks={tasks}
            onDelete={handleDelete}
            onStatusUpdate={statusUpdate}
        />
        <AddTask 
            onAdd={addTask}
        />
      </div>
      <Stats />
    </div>
  );
};
