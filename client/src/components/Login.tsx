import styles from ".SignUp.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">email</label>
      <input
        type="email"
        id="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default Login;
