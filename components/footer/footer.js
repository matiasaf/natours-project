import Col1of2 from "../layout/col-1-of-2";
import Row from "../layout/row";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoBox}>
        <img
          src="img/logo-green-2x.png"
          alt="Full Logo"
          className={styles.logo}
        />
      </div>
      <Row>
        <Col1of2>
          <div className={styles.navigation}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a href="#" className={styles.link}>
                  Company
                </a>
              </li>
              <li className={styles.item}>
                <a href="#" className={styles.link}>
                  Contact Us
                </a>
              </li>
              <li className={styles.item}>
                <a href="#" className={styles.link}>
                  Carrers
                </a>
              </li>
              <li className={styles.item}>
                <a href="#" className={styles.link}>
                  Privacy policy
                </a>
              </li>
              <li className={styles.item}>
                <a href="#" className={styles.link}>
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </Col1of2>
        <Col1of2>
          <p className={styles.copyright}>
            Build by Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque venenatis ultricies augue eget pellentesque. Mauris
            lacinia ante lacinia lectus porta, nec rutrum nibh ullamcorper.
            Donec in enim ligula.
          </p>
        </Col1of2>
      </Row>
    </footer>
  );
}

export default Footer;
