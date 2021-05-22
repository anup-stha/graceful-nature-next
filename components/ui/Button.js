import styles from "./button.module.scss";

const Button = ({ children, buttonClass = "" }) => {
  const css = buttonClass
    .trim()
    .split(" ")
    .map((c) => styles[c])
    .join(" ");

  return (
    <>
      <a href="#" className={css}>
        {children}
      </a>
    </>
  );
};

export default Button;
