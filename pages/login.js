import Link from "next/link";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import styles from "../styles/Login.module.css";

export default function Login() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className={styles.mainSection}>
        <div className={styles.center}>
          <h1>Login</h1>
          <form>
            <div className={styles.textField}>
              <input
                type="text"
                name="username"
                id="username"
                required
                autoComplete="off"
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
