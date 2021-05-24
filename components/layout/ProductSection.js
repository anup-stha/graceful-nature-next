import Button from "../ui/Button";
import Card from "./Card";
import styles from "./product.module.scss";

const ProductSection = () => {
  return (
    <>
      <section className={styles.sectionProduct}>
        <div
          className={[styles.u_center_text, styles.u_margin_bottom_big].join(
            " "
          )}
        >
          <h2 className={styles.headingSecondary}>Most Popular Products</h2>
        </div>
        <span className={styles.anchor} id="products"></span>

        <div className={styles.row}>
          <div className={styles.col_1_of_3}>
            <Card color="orange" heading="THE SEA EXPLORER" price="799"></Card>
          </div>
          <div className={styles.col_1_of_3}>
            <Card color="green" heading="THE ORGANIC SOAP" price="1799" />
          </div>
          <div className={styles.col_1_of_3}>
            <Card color="blue" heading="ORGANIC NAIL POLISH" price="899" />
          </div>
        </div>
        <div
          className={[styles.u_center_text, styles.u_margin_top_huge].join(" ")}
        >
          <Button buttonClass="btn btn__green" type="link">
            Discover more products
          </Button>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
