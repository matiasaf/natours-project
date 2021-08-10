import styles from "./paragraph.module.scss";

function Paragraph(props) {
  return (
    <p className={`${styles.paragraph} ${props.className}`}>
      {props.children}
    </p>
  );
}

export default Paragraph;
