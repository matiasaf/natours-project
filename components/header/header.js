import styles from "./header.module.scss";
import MainButton from "../buttons/main-button/main-button";
import HeadingPrimary from "./heading-primary/heading-primary";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <img src="img/logo-white.png" alt="Logo" className={styles.logo} />
      </div>

      <div className={styles.textBox}>
        <HeadingPrimary />

        <MainButton white={true} animated={true}>
          Discover our tours
        </MainButton>
      </div>
    </header>
  );
}

export default Header;
