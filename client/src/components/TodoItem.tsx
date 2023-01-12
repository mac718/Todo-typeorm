import { useState } from "react";
import CompleteOrDelete from "./CompleteOrDelete";
import styles from "./TodoItem.module.css";

interface TodoItemProps {
  id: number;
  description: string;
  targetDate: string;
  complete: boolean;
}

const TodoItem = ({ id, description, targetDate, complete }: TodoItemProps) => {
  const [crossed, setCrossed] = useState(complete);
  const date = targetDate;
  const classes = crossed ? `${styles.td} ${styles.line}` : `${styles.td}`;

  const onComplete = async () => {
    try {
      const res = await fetch("http://localhost:3000/tasks", {
        method: "PUT",
        body: JSON.stringify({ description, targetDate, complete: !complete }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await res.json();
      setCrossed((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr>
      <td className={classes}>{id}</td>
      <td className={classes}>{description}</td>
      <td className={classes}>{date}</td>
      <td className={styles.td}>
        <CompleteOrDelete onComplete={onComplete} completed={crossed} />
      </td>
    </tr>
  );
};

export default TodoItem;
