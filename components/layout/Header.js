import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo_box}>
        <img src="images/logo-white.png" alt="LOGO" className={styles.logo} />
      </div>
      <div class={styles.text_box}>
        <h1 className={styles.heading_primary}>
          <span className={styles.heading_primary_main}>COSMETICS</span>
          <span className={styles.heading_primary_sub}>
            Organic Products from Nepal
          </span>
        </h1>
        <a
          href="#"
          className={[styles.btn, styles.btn_white, styles.btn_animated].join(
            " "
          )}
        >
          Discover Our Products
        </a>
      </div>
    </div>
  );
};

export default Header;
