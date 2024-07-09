import styles from '../TaskItem.module.css';
import { useToast } from '../../../Contexts/ToastContext';

const TaskButtons = ({
  task,
  toggleTaskCompletion,
  handleEdit,
  handleDeleteClick,
  setOpenDropdownId,
}) => {
  const { showToast } = useToast();

  return (
    <>
      <button
        className={styles.btnLink}
        onClick={() => {
          toggleTaskCompletion(task?.id);
          setOpenDropdownId(null);
          showToast(`Status alterado`);
        }}
      >
        <u>{task?.completed ? ' Ativar' : ' Concluir'}</u>
      </button>
      <button
        className={styles.btnPut}
        onClick={() => {
          handleEdit();
          setOpenDropdownId(null);
        }}
      >
        Editar
      </button>
      <button
        className={styles.btnDel}
        onClick={() => {
          handleDeleteClick(task);
          setOpenDropdownId(null);
        }}
      >
        Deletar
      </button>
    </>
  );
};

export default TaskButtons;
