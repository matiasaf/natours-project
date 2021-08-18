import MainButton from "../../buttons/main-button/main-button";
import Back from "./card-back/card-back";
import CardDetails from "./card-details/card-details";
import CardHeading from "./card-heading/card-heading";
import CardPicture from "./card-picture/card-picture";
import styles from "./card.module.scss";

function Front({ styles, children }) {
  return <div className={`${styles.side} ${styles.front}`}>{children}</div>;
}

function Card({ title, img_url, order, price, handleShowingPopup, children }) {
  return (
    <div className={styles.card}>
      <Front styles={styles}>
        <CardPicture order={order} img_url={img_url} />
        <CardHeading order={order}>{title}</CardHeading>
        <CardDetails>{children}</CardDetails>
      </Front>

      <Back styles={styles} order={order}>
        <div className={styles.cta}>
          <div className={styles.cardPriceBox}>
            <p className={styles.cardPriceOnly}>Only</p>
            <p className={styles.cardPriceValue}>${price}</p>
          </div>
          <MainButton white={true} isButton={true} onClick={handleShowingPopup}>Book now!</MainButton>
        </div>
      </Back>
    </div>
  );
}

export default Card;
