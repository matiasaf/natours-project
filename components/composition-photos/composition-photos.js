import styles from "./composition-photos.module.scss";

function CompositionPhotos() {
  return (
    <div className={styles.composition}>
      <img
        src="img/nat-1.jpg"
        alt="Photo 1"
        className={
          styles.composition__photo + " " + styles.composition__photo_p1
        }
      />
      <img
        src="img/nat-2.jpg"
        alt="Photo 2"
        className={
          styles.composition__photo + " " + styles.composition__photo_p2
        }
      />
      <img
        src="img/nat-3.jpg"
        alt="Photo 3"
        className={
          styles.composition__photo + " " + styles.composition__photo_p3
        }
      />
    </div>
  );
}

export default CompositionPhotos;
