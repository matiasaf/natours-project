import styles from "./section-tours.module.scss";

function SectionTours({ children }) {
  return <section className={styles.sectionTours}>{children}</section>;
}

export default SectionTours;
