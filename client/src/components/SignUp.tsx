import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorNotification from "./ErrorNotification";
import styles from "./SignUp.module.css";
import TodoHeading from "./TodoHeading";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/v1/users", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        navigate("/tasks");
      } else {
        const json = await res.json();
        setError(true);
        setErrorMessage(json.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <TodoHeading />
      <form className={styles.form} onSubmit={handleSubmit}>
        {error && <ErrorNotification message={errorMessage} />}
        <div className={styles.heading}>Sign Up</div>
        <label htmlFor="name">name</label>
        <input
          type="name"
          id="text"
          className={styles.input}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          className={styles.input}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          className={styles.input}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default SignUp;
