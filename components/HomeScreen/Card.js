import styles from "./card.module.scss";
const Card = ({ color, heading, price }) => {
  return (
    <div className={styles.card}>
      <div className={[styles.card_side, styles.card_side__front].join(" ")}>
        <div
          className={
            color === "orange"
              ? [styles.card_picture, styles.card_picture__1].join(" ")
              : color === "blue"
              ? [styles.card_picture, styles.card_picture__3].join(" ")
              : [styles.card_picture, styles.card_picture__2].join(" ")
          }
        >
          &nbsp;
        </div>
        <h4 className={styles.card_heading}>
          <span
            className={
              color === "orange"
                ? [styles.card_heading_span, styles.card_heading_span__1].join(
                    " "
                  )
                : color === "blue"
                ? [styles.card_heading_span, styles.card_heading_span__3].join(
                    " "
                  )
                : [styles.card_heading_span, styles.card_heading_span__2].join(
                    " "
                  )
            }
          >
            {heading}
          </span>
        </h4>
        <div className={styles.card_details}>
          <ul>
            <li>lorem ipsum</li>
            <li>ipsum lorem</li>
            <li>fljorjk lro</li>
            <li>eiidejin nie</li>
            <li>dkmedj</li>
          </ul>
        </div>
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
        <div className={styles.card_cta}>
          <div className={styles.card_priceBox}>
            <p className={styles.card_price__only}>Only</p>
            <p className={styles.card_price__value}>Rs. {price}</p>
          </div>
          <a className={[styles.btn, styles.btn__white].join(" ")}>Buy Now</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
