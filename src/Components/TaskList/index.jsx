/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useTaskContext } from '../../Contexts/TaskContext';
import Loader from '../../Components/Loader';
import TaskItem from '../../Components/TaskItem';
import ErrorPage from '../../Pages/ErrorPage';
import styles from './TaskList.module.css';
import ResizeDropDownEffect from '../../utils/ResizeDropDownEffect';

export default function TaskList() {
  const { taskList, loading, error } = useTaskContext();
  const [openDropdownId, setOpenDropdownId] = useState(null);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className={styles.taskList}>
      {taskList.map((task) => (
        <div
          className={styles.itemTaskList}
          key={task.id}
        >
          <ResizeDropDownEffect setOpenDropdownId={setOpenDropdownId} />
          <TaskItem
            task={task}
            isDropdownOpen={openDropdownId === task.id}
            setOpenDropdownId={setOpenDropdownId}
          />
        </div>
      ))}
    </div>
  );
}
