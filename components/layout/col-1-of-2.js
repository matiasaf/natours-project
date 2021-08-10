import styles from "./col-1-of-2.module.scss";

function Col1of2({ children }) {
  return <div className={styles.col1of2}>{children}</div>;
}

export default Col1of2;
