import { useState } from "react";
import styles from "./AddTaskForm.module.css";

interface AddTAskFormProps {
  onSave: (description: string, targetDate: Date) => void;
}

const AddTaskForm = ({ onSave }: AddTAskFormProps) => {
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState(new Date());

  const onDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription((event.target as HTMLInputElement).value);
  };

  const onTargetDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTargetDate(new Date((event.target as HTMLInputElement).value));
  };

  return (
    <div>
      <label htmlFor="description">description</label>
      <input
        id="description"
        className={styles.input}
        type="text"
        onChange={onDescriptionChange}
      />

      <label htmlFor="target-date">target date</label>
      <input
        id="target-date"
        className={styles.input}
        type="date"
        onChange={onTargetDateChange}
      />

      <button
        className={styles.button}
        onClick={() => onSave(description, targetDate)}
      >
        Save
      </button>
    </div>
  );
};

export default AddTaskForm;
