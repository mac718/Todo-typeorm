import "./App.css";
import TodoList from "./components/TodoList";
import Modal, { Backdrop } from "./components/Modal";
import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [addTaskOpen, setAddTaksOpen] = useState(false);

  return (
    <div className="App">
      {addTaskOpen && (
        <div>
          <Modal onClose={() => setAddTaksOpen(false)}>
            <AddTaskForm />
          </Modal>
        </div>
      )}
      <button onClick={() => setAddTaksOpen(true)}>Add Task</button>
      <TodoList />
    </div>
  );
}

export default App;
