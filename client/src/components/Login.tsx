import styles from "./SignUp.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoHeading from "./TodoHeading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSucess] = useState(false);

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
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <TodoHeading />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.heading}>Log in</div>
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
