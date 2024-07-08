import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GenerateRadomId } from '../utils/GenerateRadomId';

export const useSubmit = (addTask, editTask, task) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(task ? task.completed : false);
  const navigate = useNavigate();

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setCompleted(task.completed);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      if (task) {
        editTask(task.id, { id: task.id, title, completed });
      } else {
        addTask({ id: GenerateRadomId(), title, completed });
      }
      setTitle('');
      setCompleted(false);
      navigate('/');
    }
  };

  const autoResize = (textarea) => {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return { title, completed, setCompleted, setTitle, handleSubmit, autoResize };
};
