function Task({ task, deleteTask }) {
  return (
    <li>
      {task}
      <button onClick={() => deleteTask(task)}>
        Delete
      </button>
    </li>
  );
}

export default Task;