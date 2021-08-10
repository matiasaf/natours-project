import styles from "./col-1-of-4.module.scss";

function Col1of4({ children }) {
  return <div className={styles.col1of4}>{children}</div>;
}

export default Col1of4;
