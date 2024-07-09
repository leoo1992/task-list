import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GenerateRadomId } from '../utils/GenerateRadomId';
import toast from 'react-hot-toast';
import { useTaskContext } from '../Contexts/TaskContext';

export const useSubmit = () => {
  const location = useLocation();
  const { task } = location.state || {};
  const { addTask, editTask } = useTaskContext();
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
        toast.success(`Tarefa alterada`);
      } else {
        addTask({ id: GenerateRadomId(), title, completed });
        toast.success(`Tarefa adicionada`);
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
