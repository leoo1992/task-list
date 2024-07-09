/* eslint-disable no-unused-vars */
import { useTaskContext } from '../../Contexts/TaskContext';
import { useNavigate } from 'react-router-dom';
import styles from './TaskItem.module.css';
import { RxChevronDown } from 'react-icons/rx';
import TaskButtons from './SubComponents/TaskButtons';
import DropdownMenu from './SubComponents/DropdownMenu';
import TaskStatus from './SubComponents/TaskStatus';

export default function TaskItem({ task, isDropdownOpen, setOpenDropdownId }) {
  const { toggleTaskCompletion, handleDeleteClick } = useTaskContext();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/task/${task.id}`, { state: { task } });
  };

  return (
    <div className={styles.taskConainer}>
      <div className={styles.Header}>
        <strong className={styles.idItem}>{task?.id}</strong>
        <div className={styles.btnContainer}>
          <TaskButtons
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            handleEdit={handleEdit}
            handleDeleteClick={handleDeleteClick}
            setOpenDropdownId={setOpenDropdownId}
          />
        </div>
        <button
          className={styles.dropdownButton}
          onClick={() => setOpenDropdownId(isDropdownOpen ? null : task.id)}
        >
          <RxChevronDown size={24} />
        </button>
        <DropdownMenu
          task={task}
          isDropdownOpen={isDropdownOpen}
          toggleTaskCompletion={toggleTaskCompletion}
          handleEdit={handleEdit}
          handleDeleteClick={handleDeleteClick}
          setOpenDropdownId={setOpenDropdownId}
        />
      </div>
      <div className={styles.taskItem}>
        <strong className={styles.TitleContainer}>
          <span className={styles.NameStatus}>Tarefa:</span>
          <span className={styles.titleText}>{task?.title}</span>
        </strong>
        <TaskStatus task={task} />
      </div>
    </div>
  );
}
