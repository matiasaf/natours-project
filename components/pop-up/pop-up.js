import HeadingSecondary from "../heading-secondary/heading-secondary";
import HeadingTertiary from "../heading-tertiary/heading-tertiary";
import styles from "./pop-up.module.scss";

function PopUp({ onShowingPopup }) {
  return (
    <div className={styles.popupContainer} onClick={onShowingPopup}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.left}>
          <img
            src="img/nat-8.jpg"
            alt="Popup Image 1"
            className={styles.images}
          />
          <img
            src="img/nat-9.jpg"
            alt="Popup Image 2"
            className={styles.images}
          />
        </div>
        <div className={styles.right}>
          <HeadingSecondary>Start Booking Now</HeadingSecondary>
          <HeadingTertiary>
            IMPORTANT - PLEASE READ THESE TERMS BEFORE BOOKING
          </HeadingTertiary>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            placerat orci eget odio pulvinar, a viverra sapien finibus. Etiam
            vestibulum metus in magna luctus tincidunt. Nam sagittis mi nisl, et
            ornare dui tincidunt sed. Suspendisse malesuada suscipit luctus.
            Morbi id nibh fringilla, aliquet massa ut, convallis ex. Aenean
            consectetur ipsum diam, a efficitur erat laoreet eget. Duis pretium
            at urna vitae posuere. Nam convallis eu lacus sit amet rutrum. Proin
            maximus felis sed elit volutpat, et fermentum sapien euismod.
            Integer vitae tincidunt sapien, quis ultrices lacus. Cras placerat
            nibh vitae vestibulum lacinia. Quisque pretium felis leo, non
            imperdiet ex pretium et. Nunc dignissim rutrum lectus, non venenatis
            mauris mollis id. Donec quis convallis ipsum. Aenean eget libero id
            elit iaculis iaculis quis nec odio. Duis ultrices dolor odio, at
            tempor mauris consequat ac. Donec dapibus ex id lacinia interdum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
