import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import styles from "../styles/Signup.module.css";

export default function SignUp() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      bio: "",
      social_media: "",
      username: username,
      password: password,
    };
    const headers = { "Content-Type": "application/json" };
    await axios
      .post("http://127.0.0.1:8000/user/new", data, headers)
      .then((response) => {
        console.log(response);
        router.push("/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Topbar />
      <Sidebar />
      <div className={styles.mainSection}>
        <div className={styles.center}>
          <h1>Create Account</h1>
          <form autoComplete="off" onSubmit={submitHandler}>
            <div className={styles.textField}>
              <input
                type="text"
                name="name"
                id="name"
                required
                autoComplete="off"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <span></span>
              <label htmlFor="name">Name</label>
            </div>
            <div className={styles.textField}>
              <input
                type="text"
                name="username"
                id="username"
                required
                autoComplete="off"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <span></span>
              <label htmlFor="username">UserName</label>
            </div>
            <div className={styles.textField}>
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="off"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <span></span>
              <label htmlFor="email">Email Id</label>
            </div>
            <div className={styles.textField}>
              <input
                type="password"
                name="password"
                id="password"
                required
                autoComplete="off"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <span></span>
              <label htmlFor="password">Password</label>
            </div>
            <input type="submit" value="Sign Up" className={styles.submitBtn} />
            <div className={styles.loginLink}>
              Already have an account?{" "}
              <Link href="/login">
                <a>Login</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
