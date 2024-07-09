/* eslint-disable no-unused-vars */
import { RxTimer } from 'react-icons/rx';
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <RxTimer size={40} />
      </div>
      <div>
        <span className={styles.dots}>
          <span>Carregando</span>
          <span className={styles.dot}>.</span>
          <span className={styles.dot}>.</span>
          <span className={styles.dot}>.</span>
        </span>
      </div>
    </div>
  );
}
