import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoItem from "./TodoItem";
import AddTaskForm from "./AddTaskForm";
import Modal from "./Modal";
import styles from "./TodoList.module.css";

interface Item {
  id: number;
  description: string;
  targetDate: string;
  complete: boolean;
}

const TodoList = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [addTaskOpen, setAddTaksOpen] = useState(false);
  const navigate = useNavigate();

  const getTasks = async () => {
    try {
      const res = await fetch("/api/v1/tasks");
      const json = await res.json();
      setItems(json);
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  const onDelete = async (id: number) => {
    try {
      await fetch(`api/v1/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const onSave = async (description: string, targetDate: Date) => {
    try {
      await fetch("/api/v1/tasks", {
        method: "POST",
        body: JSON.stringify({ description, targetDate, complete: false }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setAddTaksOpen(false);
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      {addTaskOpen && (
        <div>
          <Modal onClose={() => setAddTaksOpen(false)}>
            <AddTaskForm onSave={onSave} />
          </Modal>
        </div>
      )}
      <button onClick={() => setAddTaksOpen(true)}>Add Task</button>
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
              onDelete={onDelete}
              key={item.id}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
