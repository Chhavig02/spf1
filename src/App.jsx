import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('counter')
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState('')
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [lovePoints, setLovePoints] = useState(0)
  const [interactions, setInteractions] = useState(0)

  // Timer effect
  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => setSeconds(s => s + 1), 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  // Add love points and track interactions
  const addLovePoints = (points) => {
    setLovePoints(prev => prev + points)
    setInteractions(prev => prev + 1)
  }

  // Counter functions
  const increment = () => {
    setCount(count + 1)
    addLovePoints(5)
  }
  const decrement = () => {
    setCount(count - 1)
    addLovePoints(3)
  }
  const resetCounter = () => {
    setCount(0)
    addLovePoints(2)
  }

  // Todo functions
  const addTodo = () => {
    if (todoInput.trim()) {
      setTodos([...todos, { id: Date.now(), text: todoInput, completed: false }])
      setTodoInput('')
      addLovePoints(10)
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
    addLovePoints(8)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
    addLovePoints(2)
  }

  // Timer functions
  const formatTime = (s) => {
    const hours = Math.floor(s / 3600)
    const minutes = Math.floor((s % 3600) / 60)
    const secs = s % 60
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const resetTimer = () => {
    setSeconds(0)
    setIsRunning(false)
    addLovePoints(3)
  }

  const toggleTimer = () => {
    setIsRunning(!isRunning)
    addLovePoints(2)
  }

  return (
    <div className={`app-wrapper ${isDarkMode ? 'dark-mode' : ''}`}>
      <header className="app-header">
        <h1>✨ Wonderful Single Page Application</h1>
        <p className="welcome-message">Welcome to <span className="chhavi-name">❤️ Chhavi SPA ❤️</span></p>
        
        {/* Learning Stats */}
        <div className="learning-stats">
          <div className="stat-item">
            <span className="stat-label">📊 Interactions:</span>
            <span className="stat-value">{interactions}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">🎯 Points:</span>
            <span className="stat-value">{lovePoints}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">✅ Tasks:</span>
            <span className="stat-value">{todos.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">⏱️ Time:</span>
            <span className="stat-value">{formatTime(seconds)}</span>
          </div>
        </div>

        <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </header>

      <nav className="tab-navigation">
        <button 
          className={`tab-btn ${activeTab === 'counter' ? 'active' : ''}`}
          onClick={() => setActiveTab('counter')}
        >
          📊 Counter
        </button>
        <button 
          className={`tab-btn ${activeTab === 'todos' ? 'active' : ''}`}
          onClick={() => setActiveTab('todos')}
        >
          ✓ Todo List
        </button>
        <button 
          className={`tab-btn ${activeTab === 'timer' ? 'active' : ''}`}
          onClick={() => setActiveTab('timer')}
        >
          ⏱️ Timer
        </button>
      </nav>

      <main className="app-main">
        {/* Counter Tab */}
        {activeTab === 'counter' && (
          <div className="card">
            <h2>Counter Application</h2>
            <div className="counter-display">
              <p className="counter-value">{count}</p>
            </div>
            <div className="button-group">
              <button className="btn btn-decrement" onClick={decrement}>
                ➖ Decrement
              </button>
              <button className="btn btn-reset" onClick={resetCounter}>
                🔄 Reset
              </button>
              <button className="btn btn-increment" onClick={increment}>
                ➕ Increment
              </button>
            </div>
            <p className="info">Real-time counter with dynamic updates!</p>
          </div>
        )}

        {/* Todo Tab */}
        {activeTab === 'todos' && (
          <div className="card">
            <h2>Todo List</h2>
            <div className="todo-input-group">
              <input
                type="text"
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                placeholder="Add a new todo..."
                className="todo-input"
              />
              <button className="btn btn-increment" onClick={addTodo}>
                ➕ Add
              </button>
            </div>
            <ul className="todo-list">
              {todos.length === 0 ? (
                <p className="empty-state">No todos yet. Add one to get started!</p>
              ) : (
                todos.map(todo => (
                  <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className="todo-checkbox"
                    />
                    <span className="todo-text">{todo.text}</span>
                    <button 
                      className="btn-delete" 
                      onClick={() => deleteTodo(todo.id)}
                    >
                      🗑️
                    </button>
                  </li>
                ))
              )}
            </ul>
            <p className="info">Completed: {todos.filter(t => t.completed).length}/{todos.length}</p>
          </div>
        )}

        {/* Timer Tab */}
        {activeTab === 'timer' && (
          <div className="card">
            <h2>Stopwatch Timer</h2>
            <div className="timer-display">
              <p className="timer-value">{formatTime(seconds)}</p>
            </div>
            <div className="button-group">
              <button 
                className={`btn ${isRunning ? 'btn-decrement' : 'btn-increment'}`}
                onClick={toggleTimer}
              >
                {isRunning ? '⏸️ Pause' : '▶️ Start'}
              </button>
              <button className="btn btn-reset" onClick={resetTimer}>
                🔄 Reset
              </button>
            </div>
            <p className="info">Click Start to begin timing!</p>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Dynamic React SPA • Updates without page reload • Built with React & Vite • Made with ❤️ for Chhavi</p>
      </footer>
    </div>
  )
}

export default App
