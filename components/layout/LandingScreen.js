import styles from "./landing-screen.module.scss";
import Button from "../ui/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_logoBox}>
        <img
          src="images/logo-white.png"
          alt="LOGO"
          className={styles.header_logo}
        />
      </div>
      <div className={styles.header_textBox}>
        <h1 className={styles.headingPrimary}>
          <span className={styles.headingPrimary__main}>COSMETICS</span>
          <span className={styles.headingPrimary__sub}>
            Organic Products from Nepal
          </span>
        </h1>
        <Button buttonClass={"btn btn__white btn__animated"}>
          Discover Our Products
        </Button>
      </div>
    </header>
  );
};

export default Header;
