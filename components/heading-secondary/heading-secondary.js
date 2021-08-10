import styles from "./heading-secondary.module.scss";

function HeadingSecondary(props) {
  return (
    <h2 className={`${styles.headingSecondary} ${props.className}`}>
      {props.children}
    </h2>
  );
}

export default HeadingSecondary;
