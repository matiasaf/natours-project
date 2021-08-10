import styles from "./card-details.module.scss";

function CardDetails({ children }) {
  return (
    <div className={styles.cardDetails}>
     {children}
    </div>
  );
}

export default CardDetails;
