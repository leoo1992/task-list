import styles from './TaskForm.module.css';
import { useTaskContext } from '../../Contexts/TaskContext';
import { useLocation } from 'react-router-dom';
import { useSubmit } from '../../Hooks/useSubmit';

export default function TaskForm() {
  const location = useLocation();
  const { task } = location.state || {};
  const { addTask, editTask } = useTaskContext();
  const { completed, title, setTitle, setCompleted, handleSubmit, autoResize } =
    useSubmit(addTask, editTask, task);

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <span className={styles.title}>
        {task ? 'Modificar Tarefa' : 'Adicionar tarefa'}
      </span>
      <div className={styles.formGroup}>
        <label className={styles.label}>Nome:</label>
        <textarea
          type="text"
          className={styles.inputText}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            autoResize(e.target);
          }}
          onInput={(e) => autoResize(e.target)}
          placeholder="Nome"
          maxLength={60}
          rows="2"
          required
          autoFocus
        />
      </div>

      {task ? (
        <div className={styles.formGroup}>
          <label className={styles.label}>Status:</label>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
            <span>{completed ? 'Concluída' : 'Incompleta'}</span>
          </div>
        </div>
      ) : null}

      <button
        type="submit"
        className={styles.btn}
      >
        {task ? 'Salvar' : 'Adicionar'}
      </button>
    </form>
  );
}
