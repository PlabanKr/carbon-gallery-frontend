import styles from "../../styles/Card.module.css";

const Card = () => {
  return (
    <div className={styles.cardBody}>
      <img
        src="https://images.pexels.com/photos/2418645/pexels-photo-2418645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="balloons"
      />
    </div>
  );
};

export default Card;
