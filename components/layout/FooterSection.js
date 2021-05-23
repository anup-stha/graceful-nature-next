import styles from "./footer-section.module.scss";

const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_logoBox}>
        <img
          src="images/logo-green-2x.png"
          alt="Full logo"
          className={styles.footer_logo}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.col_1_of_2}>
          <div className={styles.footer_navigation}>
            <ul className={styles.footer_list}>
              <li className={styles.footer_item}>
                <a href="#" className={styles.footer_link}>
                  Company
                </a>
              </li>
              <li className={styles.footer_item}>
                <a href="#" className={styles.footer_link}>
                  Contact Us
                </a>
              </li>

              <li className={styles.footer_item}>
                <a href="#" className={styles.footer_link}>
                  Carrers
                </a>
              </li>
              <li className={styles.footer_item}>
                <a href="#" className={styles.footer_link}>
                  Privacy Term
                </a>
              </li>
              <li className={styles.footer_item}>
                <a href="#" className={styles.footer_link}>
                  terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.col_1_of_2}>
          <p className={styles.footer_copyright}>
            Built by{" "}
            <a href="#" className={styles.footer_link}>
              Anup Shrestha
            </a>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            eligendi est nulla nam{" "}
            <a href="#" className={styles.footer_link}>
              Graceful Nature
            </a>
            . Copyright &copy; by Anup Shrestha Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rerum dolorem dignissimos iusto
            nesciunt corporis laborum, repudiandae quae tempora vero! Sit quia
            in, temporibus mollitia nesciunt obcaecati ex enim ad quis.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
