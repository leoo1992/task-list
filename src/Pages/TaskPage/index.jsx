/* eslint-disable no-unused-vars */
import TaskForm from '../../Components/TaskForm';
import styles from './TaskPage.module.css';

export default function TaskPage() {
  return (
    <div className={styles.taskPage}>
      <TaskForm />
    </div>
  );
}
