import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { Task } from '../crud'; 
import { fetchTasks, createTask, editTask, removeTask } from '../store/actions/task.actions';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

export default function TodoList() {
  const dispatch = useDispatch<AppDispatch>();
  const { tasks, loading, error } = useSelector((state: RootState) => state.tasks);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleCheck = async (id: number | string) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      const updatedTask = { ...task, isComplete: !task.isComplete };
      dispatch(editTask(updatedTask));
    }
  };

  const handleClick = (task: Task) => {
    setEditingTask(task);
  };

  const handleAddOrUpdate = async (task: Task) => {
    if (editingTask) {
      dispatch(editTask(task));
      setEditingTask(null); // Clear editing task
    } else {
      dispatch(createTask(task));
    }
  };

  const handleDelete = async (id: number | string) => {
    dispatch(removeTask(id));

    if (editingTask && editingTask.id === id) {
      setEditingTask(null); // Clear editing task if it's the one being deleted
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <TodoForm onAddOrUpdate={handleAddOrUpdate} editingTask={editingTask} />
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onCheck={handleCheck} onClick={handleClick} onDelete={handleDelete} />
      ))}
    </div>
  );
}
