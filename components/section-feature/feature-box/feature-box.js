import HeadingTertiary from "../../heading-tertiary/heading-tertiary";
import styles from "./feature-box.module.scss";

function FeatureBox({ iconType, title, children }) {
  return (
    <div className={styles.featureBox}>
      <i className={`${styles.featureBox__icon} icon-basic-${iconType}`}></i>
      <HeadingTertiary className="u-margin-bottom-small">{title}</HeadingTertiary>

      <div className={styles.featureBox__text}>{children}</div>
    </div>
  );
}

export default FeatureBox;
