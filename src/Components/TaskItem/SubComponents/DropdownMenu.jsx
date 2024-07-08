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
}) =>
  isDropdownOpen && (
    <div className={styles.dropdownMenu}>
      <TaskButtons
        task={task}
        toggleTaskCompletion={toggleTaskCompletion}
        handleEdit={handleEdit}
        deleteTask={deleteTask}
        setOpenDropdownId={setOpenDropdownId}
      />
    </div>
  );

export default DropdownMenu;
