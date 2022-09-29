import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import styles from "../styles/Profile.module.css";

export default function Profile() {
  const router = useRouter();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const getUserInfo = async () => {
    const token = localStorage.getItem("loginToken");
    const tokenDecoded = jwt.decode(JSON.parse(token), { complete: true });
    const username = tokenDecoded.payload.sub;

    await axios
      .get("http://127.0.0.1:8000/user/username/" + username)
      .then((response) => {
        console.log(response);
        let { name, email, username } = response.data;
        setName(name);
        setEmail(email);
        setUsername(username);
      })
      .catch((error) => console.error(error));
  };

  const deleteUser = async () => {
    await axios
      .delete("http://127.0.0.1:8000/user/delete/" + username)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    router.push("/");
  };

  useEffect(() => {
    getUserInfo();
  }, []);

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
            <span>{name}</span>
            <span className={styles.detailsEditBtn}>Edit</span>
          </p>
          <p>
            <span>Email</span>
            <span>{email}</span>
            <span className={styles.detailsEditBtn}>Edit</span>
          </p>
          <p>
            <span>Username</span>
            <span>{username}</span>
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
          {/* <Link href="/">
            <a>Delete my account</a>
          </Link> */}
          <button onClick={deleteUser}>Delete my account</button>
        </div>
      </div>
    </>
  );
}
