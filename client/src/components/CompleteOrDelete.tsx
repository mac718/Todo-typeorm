import styles from "./CompleteOrDelete.module.css";

interface CompleteOrDeleteProps {
  onComplete: () => void;
  completed: boolean;
}

const CompleteOrDelete = ({ onComplete, completed }: CompleteOrDeleteProps) => {
  const classes = completed ? `${styles.restore}` : `${styles.complete}`;
  return (
    <div>
      <button className={classes} onClick={onComplete}>
        {completed ? "restore" : "completed"}
      </button>
      <button className={styles.delete}>delete</button>
    </div>
  );
};

export default CompleteOrDelete;
