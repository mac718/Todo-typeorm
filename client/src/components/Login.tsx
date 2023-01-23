import styles from "./SignUp.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoHeading from "./TodoHeading";
import ErrorNotification from "./ErrorNotification";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/v1/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      if (res.status === 200) {
        navigate("/tasks");
      } else {
        const json = await res.json();
        setError(true);
        setErrorMessage(json.msg);
      }
    } catch (err: any) {
      console.log(err);
      setError(true);
      setErrorMessage(err.msg);
    }
  };

  return (
    <>
      <TodoHeading />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.heading}>Log in</div>
        {error && <ErrorNotification message={errorMessage} />}
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
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Login;
