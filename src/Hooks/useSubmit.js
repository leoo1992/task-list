import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
        addTask({ id: Date.now(), title, completed });
      }
      setTitle('');
      setCompleted(false);
      navigate('/');
    }
  };

  return { title, completed, setCompleted, setTitle, handleSubmit };
};
