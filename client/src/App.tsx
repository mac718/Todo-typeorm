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
  // const onSave = async (description: string, targetDate: Date) => {
  //   try {
  //     await fetch("/api/v1/tasks", {
  //       method: "POST",
  //       body: JSON.stringify({ description, targetDate, complete: false }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     setAddTaksOpen(false);
  //     getTasks();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const onDelete = async (id: number) => {
  //   try {
  //     await fetch(`api/v1/tasks/${id}`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     getTasks();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getTasks();
  // }, []);

  return (
    <div className="App">
      <TodoHeading />
      <Router>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
