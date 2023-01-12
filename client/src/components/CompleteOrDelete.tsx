import styles from "./CompleteOrDelete.module.css";

interface CompleteOrDeleteProps {
  onComplete: () => void;
  onDelete: (id: number) => void;
  completed: boolean;
  id: number;
}

const CompleteOrDelete = ({
  onComplete,
  onDelete,
  completed,
  id,
}: CompleteOrDeleteProps) => {
  const classes = completed ? `${styles.restore}` : `${styles.complete}`;
  return (
    <div>
      <button className={classes} onClick={onComplete}>
        {completed ? "restore" : "completed"}
      </button>
      <button className={styles.delete} onClick={() => onDelete(id)}>
        delete
      </button>
    </div>
  );
};

export default CompleteOrDelete;
