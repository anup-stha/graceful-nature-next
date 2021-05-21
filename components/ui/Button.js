import styles from "./button.module.scss";

const Button = (props) => {
  return (
    <>
      <a
        href="#"
        className={[styles.btn, styles.btn__white, styles.btn__animated].join(
          " "
        )}
      >
        {props.children}
      </a>
    </>
  );
};

export default Button;
