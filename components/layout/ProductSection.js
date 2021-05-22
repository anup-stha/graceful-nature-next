import Card from "./Card";
import styles from "./product.module.scss";

const ProductSection = () => {
  return (
    <section className={styles.sectionProduct}>
      <div
        className={[styles.u_center_text, styles.u_margin_bottom_big].join(" ")}
      >
        <h2 className={styles.headingSecondary}>Most Popular Products</h2>
      </div>
      <div className={styles.row}>
        <div className={styles.col_1_of_3}>
          <Card color="orange" />
        </div>
        <div className={styles.col_1_of_3}>
          <Card color="green" />
        </div>
        <div className={styles.col_1_of_3}>
          <Card color="blue" />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
