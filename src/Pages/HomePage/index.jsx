/* eslint-disable no-unused-vars */
import TaskList from '../../Components/TaskList';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <TaskList />
    </div>
  );
}
