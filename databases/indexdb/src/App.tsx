import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./db";
import type { Todo } from "./db";

export default function App() {
  // State will be an array of Todos, starting empty
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>("");

  // Load todos from IndexedDB on mount
  useEffect(() => {
    loadTodos();
  }, []);

  async function loadTodos(): Promise<void> {
    const allTodos = await db.todos.toArray();
    setTodos(allTodos);
  }

  async function handleAddTodo(): Promise<void> {
    if (todo.trim() === "") return;
    const newTodo: Todo = { id: Date.now(), task: todo };

    // Add to IndexedDB
    await db.todos.add(newTodo);

    // Update state
    setTodos([...todos, newTodo]);
    setTodo("");
  }

  async function handleDeleteTodo(id: number): Promise<void> {
    // Delete from IndexedDB
    await db.todos.delete(id);

    // Update state
    const newTodos: Todo[] = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  }

  return (
    <div className="app-container">
      <h1 className="app-title">✨ Todo List</h1>
      <div className="input-container">
        <input
          className="todo-input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What needs to be done?"
        />
        <button className="add-button" onClick={handleAddTodo}>
          Add Task
        </button>
      </div>

      <div className="tasks-section">
        <h2 className="tasks-title">Your Tasks ({todos.length})</h2>
        {todos.length === 0 ? (
          <div className="empty-state">No tasks yet. Add one above! 🎯</div>
        ) : (
          <div className="tasks-list">
            {todos.map((todo) => {
              return (
                <div key={todo.id} className="todo-item">
                  <span className="todo-text">{todo.task}</span>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
