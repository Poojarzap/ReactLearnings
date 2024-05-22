// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';
import { useTaskContext } from '../context/TaskContext';

const TaskList = () => {
  const { tasks } = useTaskContext();

  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
