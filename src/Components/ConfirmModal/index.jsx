import styles from './ConfirmModal.module.css';

export function ConfirmModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <span>Atenção</span>
        </div>
        <div className={styles.body}>
          <span>
            Tem certeza que deseja <strong>EXLUIR</strong> esta tarefa?
          </span>
        </div>
        <div className={styles.buttonContent}>
          <button
            className={styles.btnConfirm}
            onClick={onConfirm}
          >
            Sim
          </button>
          <button
            className={styles.btnCancel}
            onClick={onClose}
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
}
