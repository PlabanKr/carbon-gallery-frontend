import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import styles from "../styles/Upload.module.css";

const Upload = () => {
  const router = useRouter();
  const [title, setTitle] = useState();
  const [caption, setCaption] = useState();
  const [link, setLink] = useState();
  const [userId, setUserId] = useState();

  const uploadHandler = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("loginToken");
    const tokenDecoded = jwt.decode(JSON.parse(token), { complete: true });
    const username = tokenDecoded.payload.sub;

    await axios
      .get("http://127.0.0.1:8000/user/username/" + username)
      .then((response) => {
        console.log(response.data);
        let { id } = response.data;
        setUserId(id);
      })
      .catch((error) => console.error(error));

    const data = {
      title: title,
      caption: caption,
      tag: [],
      upload_date: Date.now(),
      likes: 1,
      user_id: userId,
      link: link,
    };
    const headers = { "Content-Type": "application/json" };

    await axios
      .post("http://127.0.0.1:8000/image/new", data, headers)
      .then((response) => {
        console.log(response);
        router.push("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Topbar />
      <Sidebar />
      <div className={styles.mainSection}>
        <h1>Image Details</h1>
        <div className={styles.imgUploadSection}>
          <form onSubmit={uploadHandler}>
            <label htmlFor="title" className="form-label">
              Image Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="caption" className="form-label">
              Image Caption
            </label>
            <input
              type="text"
              name="caption"
              id="caption"
              className="form-control"
              onChange={(e) => setCaption(e.target.value)}
            />
            <label htmlFor="link" className="form-label">
              Image Link
            </label>
            <input
              type="url"
              name="link"
              id="link"
              className="form-control"
              onChange={(e) => setLink(e.target.value)}
            />
            <button className="btn btn-success mt-3">Upload Image</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Upload;
