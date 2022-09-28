import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import styles from "../styles/Signup.module.css";

export default function SignUp() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className={styles.mainSection}>
        <div className={styles.center}>
          <h1>Create Account</h1>
          <form>
            <div className={styles.textField}>
              <input
                type="text"
                name="name"
                id="name"
                required
                autoComplete="off"
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
              />
              <span></span>
              <label htmlFor="password">Password</label>
            </div>
            <input type="submit" value="Sign Up" className={styles.submitBtn} />
          </form>
        </div>
      </div>
    </>
  );
}
