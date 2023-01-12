import "./App.css";
import TodoList from "./components/TodoList";
import Modal, { Backdrop } from "./components/Modal";
import { useEffect, useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TodoHeading from "./components/TodoHeading";

function App() {
  const [addTaskOpen, setAddTaksOpen] = useState(false);
  const [items, setItems] = useState<Item[]>([]);

  interface Item {
    id: number;
    description: string;
    targetDate: string;
    complete: boolean;
  }

  const getTasks = async () => {
    try {
      const res = await fetch("http://localhost:3000/tasks");
      const json = await res.json();
      setItems(json);
    } catch (err) {
      console.log(err);
    }
  };

  const onSave = async (description: string, targetDate: Date) => {
    try {
      await fetch("http://localhost:3000/tasks", {
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
    <div className="App">
      {addTaskOpen && (
        <div>
          <Modal onClose={() => setAddTaksOpen(false)}>
            <AddTaskForm onSave={onSave} />
          </Modal>
        </div>
      )}
      <TodoHeading />
      <button onClick={() => setAddTaksOpen(true)}>Add Task</button>
      <TodoList items={items} />
    </div>
  );
}

export default App;
