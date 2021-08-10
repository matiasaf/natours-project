function Back({ styles, order, children }) {
  return (
    <div
      className={`${styles.side} ${styles.back} ${
        order === "first" ? styles.first : ""
      } ${order === "second" ? styles.second : ""} ${
        order === "third" ? styles.third : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Back;
