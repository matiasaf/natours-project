import styles from "./section-book.module.scss";

function SectionBook({ children }) {
  return <section className={styles.container}>{children}</section>;
}

export default SectionBook;
