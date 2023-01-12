import styles from "./AddTaskForm.module.css";

const AddTaskForm = () => {
  return (
    <div>
      <label htmlFor="description">description</label>
      <input id="description" className={styles.input} type="text" />

      <label htmlFor="target-date">target date</label>
      <input id="target-date" className={styles.input} type="date" />

      <button className={styles.button}>Save</button>
    </div>
  );
};

export default AddTaskForm;
