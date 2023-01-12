import styles from "./TodoHeading.module.css";

const TodoHeading = () => {
  return (
    <div>
      <div className={`${styles.textWrapper} ${styles["right-entry"]}`}>
        Ultimate
      </div>
      <div className={`${styles.textWrapper} ${styles["left-entry"]}`}>
        To-do App
      </div>
    </div>
  );
};

export default TodoHeading;
