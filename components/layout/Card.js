import styles from "./card.module.scss";
const Card = ({ color }) => {
  return (
    <div className={styles.card}>
      <div className={[styles.card_side, styles.card_side__front].join(" ")}>
        FRONT{" "}
      </div>
      <div
        className={
          color === "orange"
            ? [
                styles.card_side,
                styles.card_side__back,
                styles.card_side__back__1,
              ].join(" ")
            : color === "blue"
            ? [
                styles.card_side,
                styles.card_side__back,
                styles.card_side__back__3,
              ].join(" ")
            : [
                styles.card_side,
                styles.card_side__back,
                styles.card_side__back__2,
              ].join(" ")
        }
      >
        {" "}
        BACK{" "}
      </div>
    </div>
  );
};

export default Card;
