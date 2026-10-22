import { useState } from "react";
import Head from "./Head";
import Form from "./Form";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <div>
      <Head />

      <Form addTask={addTask} />

      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;