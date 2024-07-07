/* eslint-disable no-unused-vars */
import { useTaskContext } from '../../Contexts/TaskContext';
import { useNavigate } from 'react-router-dom';
import styles from './TaskItem.module.css';

export default function TaskItem({ task }) {
  const { toggleTaskCompletion, deleteTask } = useTaskContext();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/task/${task.id}`, { state: { task } });
  };

  return (
    <div>
      <strong>Nome: {task?.title}</strong>
      <strong>Status: {task?.completed ? 'Concluída' : 'Incompleta'}</strong>
      <button onClick={() => toggleTaskCompletion(task?.id)}>
        {task?.completed ? ' Ativar' : ' Concluir'}
      </button>
      <button onClick={() => deleteTask(task?.id)}>Deletar</button>
      <button onClick={handleEdit}>Editar</button>
    </div>
  );
}
