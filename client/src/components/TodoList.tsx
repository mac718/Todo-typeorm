import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

interface Item {
  id: number;
  description: string;
  targetDate: string;
  complete: boolean;
}

const TodoList = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        console.log(json);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <table className={styles.list}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item: Item) => (
          <TodoItem
            id={item.id}
            description={item.description}
            targetDate={item.targetDate}
            complete={item.complete}
            key={item.id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
