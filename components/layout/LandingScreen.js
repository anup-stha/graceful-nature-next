import styles from "./landing-screen.module.scss";
import Button from "../ui/Button";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_logoBox}>
        <img
          src="images/logo-white.png"
          alt="LOGO"
          className={styles.header_logo}
        />
      </div>
      <div class={styles.header_textBox}>
        <h1 className={styles.headingPrimary}>
          <span className={styles.headingPrimary__main}>COSMETICS</span>
          <span className={styles.headingPrimary__sub}>
            Organic Products from Nepal
          </span>
        </h1>
        <Button>Discover Our Products</Button>
      </div>
    </div>
  );
};

export default Header;
