import { useState } from 'react'
import './App.css'

export default function App() {
  // State for the input field
  const [task, setTask] = useState('')

  // State for the list of tasks
  const [tasks, setTasks] = useState([])

  // Handle adding a new task
  const handleAddTask = () => {
    // Don't allow empty tasks
    if (task.trim() === '') return

    // Create a new task object with a unique id
    const newTask = {
      id: Date.now(), // Simple unique id using timestamp
      text: task,
      completed: false
    }

    // Immutable state update - create new array with new task
    setTasks([...tasks, newTask])

    // Clear the input field
    setTask('')
  }

  // Handle pressing Enter in the input field
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask()
    }
  }

  // Handle toggling task completion
  const handleToggleTask = (id) => {
    // Immutable state update - map through tasks and toggle the one with matching id
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ))
  }

  // Handle deleting a task
  const handleDeleteTask = (id) => {
    // Immutable state update - filter out the task with matching id
    setTasks(tasks.filter(t => t.id !== id))
  }

  // Calculate remaining tasks
  const remainingTasks = tasks.filter(t => !t.completed).length

  // Total tasks
  const totalTasks = tasks.length

  return (
    <div className="app-container">
      <div className="card">
        {/* Header */}
        <div className="header">
          <h1 className="title">My Task Manager</h1>
          <p className="subtitle">Organize your day, one task at a time.</p>
        </div>

        {/* Input Section */}
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyPress={handleKeyPress}
            className="task-input"
          />
          <button onClick={handleAddTask} className="add-button">
            Add
          </button>
        </div>

        {/* Tasks List */}
        <div className="tasks-container">
          {totalTasks === 0 ? (
            // Conditional rendering - empty state
            <div className="empty-state">
              <p>No tasks yet. Add one above!</p>
            </div>
          ) : (
            // Use .map() to render each task
            <ul className="task-list">
              {tasks.map((t) => (
                <li key={t.id} className={`task-item ${t.completed ? 'completed' : ''}`}>
                  <div className="task-content">
                    <input
                      type="checkbox"
                      checked={t.completed}
                      onChange={() => handleToggleTask(t.id)}
                      className="task-checkbox"
                    />
                    <span className="task-text">{t.text}</span>
                  </div>
                  <button
                    onClick={() => handleDeleteTask(t.id)}
                    className="delete-button"
                    aria-label="Delete task"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Statistics */}
        {totalTasks > 0 && (
          <div className="stats">
            <p>{remainingTasks} tasks remaining · {totalTasks} total</p>
          </div>
        )}
      </div>
    </div>
  )
}
