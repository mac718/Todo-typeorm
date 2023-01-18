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
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/tasks" element={<TodoList />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
