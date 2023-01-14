import styles from "./Login.module.css";

const Login = () => {
  return (
    <form>
      <label htmlFor="email">email</label>
      <input type="email" id="email" />
      <label htmlFor="password">email</label>
      <input type="password" id="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
