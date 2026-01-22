import { useState } from 'react';
import './App.css';

export default function App() {
  const [todos, setTodos] = useState(JSON.parse(sessionStorage.getItem('notes')) || []);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      let newNotes = [...todos, { id: Date.now(), text: inputValue }]
      setTodos(newNotes);
      sessionStorage.setItem('notes', JSON.stringify(newNotes))
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    let updatedNotes = todos.filter((todo) => todo.id !== id)
    sessionStorage.setItem('notes', JSON.stringify(updatedNotes))
    setTodos(updatedNotes);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="app-container">
      <div className="todo-wrapper">
        <h1 className="todo-title">📝 My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="todo-input"
            placeholder="Add a new todo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="add-button" onClick={handleAddTodo}>
            Add
          </button>
        </div>
        <ul className="todo-list">
          {todos.length === 0 ? (
            <div className="empty-state">No todos yet. Add one above!</div>
          ) : (
            todos.map((todo) => (
              <li key={todo.id} className="todo-item">
                <span className="todo-text">{todo.text}</span>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}