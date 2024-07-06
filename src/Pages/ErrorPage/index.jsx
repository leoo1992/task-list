/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router-dom';
import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  return (
    <div
      id="error-page"
      className={styles.errorPage}
    >
      <h1>Oops!</h1>
      <p>Parece que algum erro ocorreu!</p>
      <NavLink
        to="/"
        className={styles.navLink}
      >
        <button className={styles.btn}>
          <span className={styles.textBtn}>Voltar</span>
        </button>
      </NavLink>
    </div>
  );
}
