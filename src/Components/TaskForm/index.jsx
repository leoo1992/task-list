import styles from './TaskForm.module.css';
import { useSubmit } from '../../Hooks/useSubmit';

export default function TaskForm() {
  const { title, completed, setTitle, setCompleted, handleSubmit, autoResize } =
    useSubmit();

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <span className={styles.title}>
        {completed !== undefined ? 'Modificar Tarefa' : 'Adicionar tarefa'}
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

      {completed !== undefined ? (
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
        {completed !== undefined ? 'Salvar' : 'Adicionar'}
      </button>
    </form>
  );
}
