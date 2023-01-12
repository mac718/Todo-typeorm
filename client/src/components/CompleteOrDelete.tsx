import styles from "./CompleteOrDelete.module.css";

interface CompleteOrDeleteProps {
  onComplete: () => void;
  completed: boolean;
}

const CompleteOrDelete = ({ onComplete, completed }: CompleteOrDeleteProps) => {
  return (
    <div>
      <button className={styles.complete} onClick={onComplete}>
        {completed ? "restore" : "completed"}
      </button>
      <button className={styles.delete}>delete</button>
    </div>
  );
};

export default CompleteOrDelete;
