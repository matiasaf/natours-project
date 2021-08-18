import styles from "./navigation.module.scss";

function Navigation() {
  return (
    <div className={styles.navigation}>
      <input type="checkbox" id="nav-menu" className={styles.checkbox} />

      <label htmlFor="nav-menu" className={styles.button}>
        <span className={styles.navigationIcon}></span>
      </label>

      <div className={styles.background}></div>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#" className={styles.link}>
              <span>01</span>
              About Natours
            </a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>
              <span>02</span>
              Your benefits
            </a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>
              <span>03</span>
              Popular tours
            </a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>
              <span>04</span>
              Stories
            </a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>
              <span>05</span>
              Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
