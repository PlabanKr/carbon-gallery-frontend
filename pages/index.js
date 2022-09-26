import Image from "next/image";
import Card from "../components/card/card";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import styles from "../styles/Home.module.css";

export default function Home() {
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
            <form className="input-group" style={{ width: "32rem" }}>
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Search for images"
                className="form-control"
              />
              <button className="btn btn-primary">Search</button>
            </form>
          </div>

          <div className={styles.cardContainer}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </section>
    </>
  );
}
