import styles from "./col-1-of-3.module.scss";

function Col1of3({ children }) {
  return <div className={styles.col1of3}>{children}</div>;
}

export default Col1of3;
