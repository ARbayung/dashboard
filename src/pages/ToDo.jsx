import React, { useEffect, useState } from "react";
import TableTemplate from "../components/TableTemplate";
import { v4 as uuidv4 } from "uuid";

function ToDo() {
  const [taskInput, setTaskInput] = useState("");
  const [rows, setRows] = useState([]);

  // Load tasks from localStorage only once on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setRows(savedTasks); // Set tasks from localStorage or empty array
  }, []);

  // Save tasks to localStorage whenever 'rows' state changes
  useEffect(() => {
    if (rows.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(rows));
    }
  }, [rows]); // Only save when the 'rows' state changes

  // Handle task input change
  const handleInputChange = (event) => setTaskInput(event.target.value);

  // Add new task to the list
  const handleAdd = (event) => {
    event.preventDefault();
    if (!taskInput.trim()) return; // Prevent adding empty task

    const newTask = {
      id: uuidv4(),
      task: taskInput,
      date: new Date().toLocaleDateString(),
      status: "Open",
    };

    setRows([...rows, newTask]);
    setTaskInput(""); // Reset the input field
  };

  // Delete task by ID
  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  // Mark task as completed
  const handleComplete = (id) => {
    setRows(rows.map((row) =>
      row.id === id ? { ...row, status: "Resolved" } : row
    ));
  };

  // Table columns definition
  const columns = [
    { field: "task", headerName: "Task", width: 300 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      renderCell: (params) => (
        <>
          <button onClick={() => handleComplete(params.row.id)}>Complete</button>
          <button onClick={() => handleDelete(params.row.id)} style={{ marginLeft: 8 }}>Delete</button>
        </>
      ),
    },
  ];

  return (
    <div className="todo">
      <h1>To Do List</h1>
      <form onSubmit={handleAdd}>
        <input
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button type="submit">Add</button>
      </form>

      <div className="todo-table">
        <TableTemplate rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default ToDo;