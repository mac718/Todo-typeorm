import "./App.css";
import TodoList from "./components/TodoList";
import Modal, { Backdrop } from "./components/Modal";
import { useEffect, useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TodoHeading from "./components/TodoHeading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  const [addTaskOpen, setAddTaksOpen] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState(false);

  interface Item {
    id: number;
    description: string;
    targetDate: string;
    complete: boolean;
  }

  const getTasks = async () => {
    try {
      const res = await fetch("/api/v1/tasks");
      const json = await res.json();
      setItems(json);
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
      <Router>
        <Routes>
          <Route
            path="/"
            element={<TodoList items={items} onDelete={onDelete} />}
          />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
