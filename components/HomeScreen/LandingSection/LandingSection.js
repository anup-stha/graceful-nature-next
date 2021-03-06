import styles from "./landing-section.module.scss";
import Button from "../../ui/Button";

const Header = () => {
  return (
    <>
      <span className={styles.anchor} id="top"></span>
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
            <span className={styles.headingPrimary__main}>GRACEFUL NATURE</span>
            <span className={styles.headingPrimary__sub}>
              NATURAl & Organic Products from Nepal
            </span>
          </h1>
          <Button buttonClass={"btn btn__white btn__animated"} type="link">
            Discover Our Products
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
