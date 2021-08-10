import styles from "./section-stories.module.scss";

function SectionStories({ children }) {
  return <section className={styles.sectionStories}>{children}</section>;
}

export default SectionStories;
