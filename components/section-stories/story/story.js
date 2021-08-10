import styles from "./story.module.scss";
import HeadingTertiary from "../../heading-tertiary/heading-tertiary";

function Story({ img_url, userName, title, children }) {
  return (
    <div className={styles.story}>
      <figure className={styles.shape}>
        <img
          src={img_url}
          alt="Photo for the story"
          className={styles.storyImage}
        />
        <figcaption className={styles.caption}>{userName}</figcaption>
      </figure>
      <div className={styles.text}>
        <HeadingTertiary className="u-margin-bottom-small">
          {title}
        </HeadingTertiary>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Story;
