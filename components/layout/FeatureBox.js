import styles from "./feature-screen.module.scss";

const FeatureBox = (props) => {
  return (
    <div className={styles.col_1_of_4}>
      <div className={styles.featureBox}>
        <i class={[`icon-${props.icon}`, styles.featureBox_icon].join(" ")}></i>
        <h3
          className={[
            styles.headingTertiary,
            styles.u_margin_bottom_small,
          ].join(" ")}
        >
          {props.headingText}
        </h3>
        <p className={styles.featureBox_text}>{props.subText}</p>
      </div>
    </div>
  );
};

export default FeatureBox;
