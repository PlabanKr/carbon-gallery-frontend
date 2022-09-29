import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/icons/logo.png";
import styles from "../../styles/Topbar.module.css";

const Topbar = () => {
  const router = useRouter();
  return (
    <nav
      className="navbar navbar-expand-lg bg-light fixed-top"
      id={styles.topbar}
    >
      <div className="container-lg">
        <Link href="/">
          <a className="navbar-brand">
            <Image src={logo} alt="carbon gallery" width={200} height={50} />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav ms-auto">
            {router.pathname != "/profile" ? (
              <>
                <li className="nav-item">
                  <Link href="/login">
                    <a className="btn btn-outline-secondary me-2">Login</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/signup">
                    <a className="btn btn-outline-primary">Signup</a>
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link href="/">
                  <a className="btn btn-outline-danger">Logout</a>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
