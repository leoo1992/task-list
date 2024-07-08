import styles from '../TaskItem.module.css';

const TaskButtons = ({
  task,
  toggleTaskCompletion,
  handleEdit,
  deleteTask,
  setOpenDropdownId,
}) => (
  <>
    <button
      className={task?.completed ? styles.btnChange : styles.btnSuccess}
      onClick={() => {
        toggleTaskCompletion(task?.id);
        setOpenDropdownId(null);
      }}
    >
      {task?.completed ? ' Ativar' : ' Concluir'}
    </button>
    <button
      className={styles.btnPut}
      onClick={handleEdit}
    >
      Editar
    </button>
    <button
      className={styles.btnDel}
      onClick={() => {
        deleteTask(task?.id);
        setOpenDropdownId(null);
      }}
    >
      Deletar
    </button>
  </>
);

export default TaskButtons;
