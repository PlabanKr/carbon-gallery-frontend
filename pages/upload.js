import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import styles from "../styles/Upload.module.css";

const Upload = () => {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className={styles.mainSection}>
        <h1>Image Details</h1>
        <div className={styles.imgUploadSection}>
          <form>
            <label htmlFor="title" className="form-label">
              Image Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
            />
            <label htmlFor="caption" className="form-label">
              Image Caption
            </label>
            <input
              type="text"
              name="caption"
              id="caption"
              className="form-control"
            />
            <label htmlFor="link" className="form-label">
              Image Link
            </label>
            <input type="url" name="link" id="link" className="form-control" />
            <button className="btn btn-success mt-3">Upload Image</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Upload;
