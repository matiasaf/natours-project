import styles from "./row.module.scss";

function Row({ children }) {
  return <div className={styles.row}>{children}</div>;
}

export default Row;
