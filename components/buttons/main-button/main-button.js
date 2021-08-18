import styles from "./main-button.module.scss";

function MainButton(props) {
  return props.isButton ? (
    <button
      className={`${styles.btn} ${props.white ? styles.white : ""} ${
        props.green ? styles.green : ""
      } ${props.animated ? styles.animated : ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  ) : (
    <a
      href="#"
      className={`${styles.btn} ${props.white ? styles.white : ""} ${
        props.green ? styles.green : ""
      } ${props.animated ? styles.animated : ""}`}
    >
      {props.children}
    </a>
  );
}

export default MainButton;
