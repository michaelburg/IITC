import React, { useState } from 'react';
import { Task } from '../crud';
import { Checkbox } from './ui/checkbox';

interface TodoItemProps {
  task: Task;
  onCheck: (id: number | string) => void;
  onClick: (task: Task) => void;
  onDelete: (id: number | string) => void;
}

export default function TodoItem({ task, onCheck, onClick, onDelete }: TodoItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='flex'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative' }}
    >
      <Checkbox
        checked={task.isComplete}
        onCheckedChange={() => onCheck(task.id)}
      />
      <h4 onClick={() => onClick(task)}>{task.title}</h4>
      <button
        onClick={() => onDelete(task.id)}
        style={{
          visibility: isHovered ? 'visible' : 'hidden',
          opacity: isHovered ? 1 : 0,
          transition: 'visibility 0.2s, opacity 0.2s'
        }}
      >
        Delete
      </button>
    </div>
  );
}
