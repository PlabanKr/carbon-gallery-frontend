import Link from "next/link";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import styles from "../styles/Profile.module.css";

export default function Profile() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className={styles.mainSection}>
        <h2>Profile</h2>
        <h6>User Details</h6>
        <div className={styles.usrDetails}>
          <p>
            <span>Name</span>
            <span>Plaban</span>
            <span className={styles.detailsEditBtn}>Edit</span>
          </p>
          <p>
            <span>Email</span>
            <span>Plaban@Plaban</span>
            <span className={styles.detailsEditBtn}>Edit</span>
          </p>
          <p>
            <span>Username</span>
            <span>@Plaban</span>
            <span className={styles.detailsEditBtn}>Edit</span>
          </p>
          <p>
            <span>Password</span>
            <span>********</span>
            <span className={styles.detailsEditBtn}>Edit</span>
          </p>
        </div>
        <h6>Delete Account</h6>
        <div className={styles.accDelete}>
          <p>This will remove all of your personal data forever.</p>
          <Link href="/">
            <a>Delete my account</a>
          </Link>
        </div>
      </div>
    </>
  );
}
