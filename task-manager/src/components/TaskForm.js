// src/components/TaskForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTaskContext } from '../context/TaskContext';

const TaskForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addTask } = useTaskContext();

  const onSubmit = (data) => {
    addTask({
      id: Date.now(),
      title: data.title,
      description: data.description,
      completed: false
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <input type="text" {...register('title', { required: true })} className="form-control" placeholder="Task title" />
      </div>
      <div className="mb-3">
        <textarea {...register('description')} className="form-control" placeholder="Task description"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
};

export default TaskForm;
