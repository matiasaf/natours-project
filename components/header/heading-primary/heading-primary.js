import styles from './heading-primary.module.scss';

function HeadingPrimary() {
    return (
        <h1 className={styles.headingPrimary}>
            <span className={styles.main}>Outdoors</span>
            <span className={styles.sub}>is where life happens</span>
        </h1>
    );
}

export default HeadingPrimary;
