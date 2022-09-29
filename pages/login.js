import axios from "axios";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { LoginContext, LoginContextProvider } from "../LoginContext";
import Link from "next/link";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import styles from "../styles/Login.module.css";

export default function Login() {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();

  const loginHandler = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    const headers = { "Content-Type": "application/json" };
    await axios
      .post("http://127.0.0.1:8000/user/login", data, headers)
      .then((response) => {
        // console.log(response.data);
        localStorage.setItem("loginToken", JSON.stringify(response.data.token));
        setIsLoggedIn(true);
        router.push("/profile");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Topbar />
      <Sidebar />
      <div className={styles.mainSection}>
        <div className={styles.center}>
          <h1>Login</h1>
          <form onSubmit={loginHandler}>
            <div className={styles.textField}>
              <input
                type="text"
                name="username"
                id="username"
                required
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
              />
              <span></span>
              <label htmlFor="username">UserName</label>
            </div>
            <div className={styles.textField}>
              <input
                type="password"
                name="password"
                id="password"
                required
                autoComplete="nope"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span></span>
              <label htmlFor="password">Password</label>
            </div>
            <input type="submit" value="Login" className={styles.submitBtn} />
            <div className={styles.signupLink}>
              Don&apos;t have an account?{" "}
              <Link href="/signup">
                <a>Signup</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
