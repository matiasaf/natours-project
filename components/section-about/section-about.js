import styles from "./section-about.module.scss";

function SectionAbout({ children }) {
  return <section className={styles.sectionAbout}>{children}</section>;
}

export default SectionAbout;
