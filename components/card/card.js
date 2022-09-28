import styles from "../../styles/Card.module.css";

const Card = ({ title, link }) => {
  return (
    <div className={styles.cardBody}>
      <img src={link} alt={title} defer />
    </div>
  );
};

export default Card;
