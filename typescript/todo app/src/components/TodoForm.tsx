import React, { useState, useEffect } from 'react';
import { Task } from '../crud';

interface TodoFormProps {
  onAddOrUpdate: (task: Task) => void;
  editingTask: Task | null;
}

export default function TodoForm({ onAddOrUpdate, editingTask }: TodoFormProps) {
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
    } else {
      setTitle('');
    }
  }, [editingTask]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTask) {
      const updatedTask: Task = { ...editingTask, title };
      onAddOrUpdate(updatedTask);
    } else {
      const newTask: Task = { id: Date.now().toString(), title, isComplete: false };
      onAddOrUpdate(newTask);
    }
    setTitle(''); // Clear the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
        required
      />
      <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}
