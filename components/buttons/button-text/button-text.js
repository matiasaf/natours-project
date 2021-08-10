import styles from "./button-text.module.scss";

function ButtonText(props) {
  return (
    <a href="#" className={`${styles.btnText} ${props.className}`}>
      {props.children} &rarr;
    </a>
  );
}

export default ButtonText;
