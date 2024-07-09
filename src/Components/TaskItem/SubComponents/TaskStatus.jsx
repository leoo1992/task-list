/* eslint-disable no-unused-vars */
import styles from '../TaskItem.module.css';
import { RxCheckCircled, RxCrossCircled } from 'react-icons/rx';

const TaskStatus = ({ task }) => (
  <strong className={styles.StatusContainer}>
    <span className={styles.NameStatus}>Status:</span>
    <span
      className={task?.completed ? styles.StatusOkText : styles.StatusXText}
    >
      {task?.completed ? (
        <>
          <span className={styles.statusText}>Concluída</span>
          <RxCheckCircled
            size={20}
            className={styles.icon}
          />
        </>
      ) : (
        <>
          <span className={styles.statusText}>Incompleta</span>
          <RxCrossCircled
            size={20}
            className={styles.icon}
          />
        </>
      )}
    </span>
  </strong>
);

export default TaskStatus;
