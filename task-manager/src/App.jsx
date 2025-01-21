import * as React from "react";
import { createTask } from "./utils";
import "./App.css";

function reducer(tasks, action) {
  switch (action.type) {
    case "add":
      return [...tasks, action.task];
    case "update":
      return tasks.map((task) =>
        task.id === action.id
          ? {
              ...task,
              status: task.status === "pending" ? "completed" : "pending",
            }
          : task
      );
    case "delete":
      return tasks.filter((task) => task.id !== action.id);
    default:
      return tasks;
  }
}

export default function TaskManager() {
  const [tasks, dispatch] = React.useReducer(reducer, []);

  const handleUpdateTaskStatus = (id) => {
    dispatch({ type: "update", id });
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: "delete", id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    dispatch({ type: "add", task: createTask(formData.get("task")) });

    e.target.reset();
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit}>
        <input name="task" placeholder="Task title" />
        <button className="primary" type="submit">
          Add Task
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <button
                className={`status ${task.status}`}
                onClick={() => handleUpdateTaskStatus(task.id)}
              />
              {task.title}
            </div>
            <button className="link" onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
