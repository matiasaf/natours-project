import styles from "./heading-tertiary.module.scss";

function HeadingTertiary(props) {
  return (
    <h3 className={`${styles.headingTertiary} ${props.className}`}>
      {props.children}
    </h3>
  );
}

export default HeadingTertiary;
