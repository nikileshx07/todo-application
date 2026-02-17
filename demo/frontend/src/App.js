import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingDescription, setEditingDescription] = useState("");

  useEffect(() => {
    fetchTodos();
  }, [filter]);

  const fetchTodos = async () => {
    let url = "http://localhost:8080/api/todos";
    if (filter !== "") {
      url += `?completed=${filter}`;
    }
    const response = await axios.get(url);
    setTodos(response.data);
  };

  const addTodo = async () => {
    if (!title) return;

    await axios.post("http://localhost:8080/api/todos", {
      title,
      description,
      completed: false
    });

    setTitle("");
    setDescription("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:8080/api/todos/${id}`);
    fetchTodos();
  };

  const toggleComplete = async (todo) => {
    await axios.put(`http://localhost:8080/api/todos/${todo.id}`, {
      ...todo,
      completed: !todo.completed
    });
    fetchTodos();
  };

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditingTitle(todo.title);
    setEditingDescription(todo.description);
  };

  const saveEdit = async (todo) => {
    await axios.put(`http://localhost:8080/api/todos/${todo.id}`, {
      ...todo,
      title: editingTitle,
      description: editingDescription
    });

    setEditingId(null);
    fetchTodos();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo Application</h2>

      <h4>Add Todo</h4>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button onClick={addTodo}>Add</button>

      <h4>Filter</h4>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="true">Completed</option>
        <option value="false">Incomplete</option>
      </select>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <>
                <input
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                />
                <input
                  value={editingDescription}
                  onChange={(e) => setEditingDescription(e.target.value)}
                />
                <button onClick={() => saveEdit(todo)}>Save</button>
              </>
            ) : (
              <>
                <span
                  onClick={() => toggleComplete(todo)}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer"
                  }}
                >
                  {todo.title} - {todo.description}
                </span>
                <button onClick={() => startEditing(todo)}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
