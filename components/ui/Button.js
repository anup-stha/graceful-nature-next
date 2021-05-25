import styles from "./button.module.scss";

const Button = ({ children, buttonClass = "", type }) => {
  const css = buttonClass
    .trim()
    .split(" ")
    .map((c) => styles[c])
    .join(" ");

  return (
    <>
      {type === "link" ? (
        <a href="#" className={css}>
          {children}
        </a>
      ) : (
        <button className={css}>{children}</button>
      )}
    </>
  );
};

export default Button;
