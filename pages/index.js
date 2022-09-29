import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/card/card";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    try {
      const response = await axios("http://127.0.0.1:8000/image/all");
      setImages(response.data);
    } catch (error) {
      console.warn(error);
    }
  };

  const searchImages = async (e) => {
    e.preventDefault();

    if (searchTerm) {
      await axios
        .get("http://127.0.0.1:8000/image/match/" + searchTerm)
        .then((response) => {
          // console.log(response.data);
          setImages(response.data);
        })
        .catch((error) => console.error(error));
    } else {
      getImages();
    }
  };

  return (
    <>
      <section>
        <Topbar />
        <Sidebar />
        <section className={styles.bodyScrollable}>
          <div className={styles.hero}>
            <h3 className={styles.heroHeader}>
              Express Your Story on Our Platform.
            </h3>
            <p>
              Access all the images you need to turn ideas into achievements.
            </p>
            <form
              className="input-group"
              style={{ width: "32rem" }}
              onSubmit={searchImages}
            >
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Search for images"
                className="form-control"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-primary">Search</button>
            </form>
          </div>

          <div className={styles.cardContainer}>
            {images.map((img, index) => {
              console.log(img);
              return <Card link={img.link} title={img.title} key={index} />;
            })}
          </div>
        </section>
      </section>
    </>
  );
}
