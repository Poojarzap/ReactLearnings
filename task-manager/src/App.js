// src/App.js
import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <div className="container mt-5">
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
