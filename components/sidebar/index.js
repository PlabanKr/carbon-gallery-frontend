import Link from "next/link";
import styles from "../../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.containerSidebar}>
      <Link href="/profile">
        <a className={styles.btn}>
          <i className="fas fa-user-circle"></i>
          <br />
          User
        </a>
      </Link>
      <Link href="/upload">
        <a className={styles.btn}>
          <i className="fas fa-cloud-upload-alt"></i>
          <br />
          Upload
        </a>
      </Link>
    </div>
  );
};

export default Sidebar;
