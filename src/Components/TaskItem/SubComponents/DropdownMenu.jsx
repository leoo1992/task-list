/* eslint-disable no-unused-vars */
import styles from '../TaskItem.module.css';
import TaskButtons from './TaskButtons';

const DropdownMenu = ({
  task,
  isDropdownOpen,
  toggleTaskCompletion,
  handleEdit,
  deleteTask,
  setOpenDropdownId,
  handleDeleteClick,
}) =>
  isDropdownOpen && (
    <div className={styles.dropdownMenu}>
      <TaskButtons
        task={task}
        toggleTaskCompletion={toggleTaskCompletion}
        handleEdit={handleEdit}
        deleteTask={deleteTask}
        setOpenDropdownId={setOpenDropdownId}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );

export default DropdownMenu;
