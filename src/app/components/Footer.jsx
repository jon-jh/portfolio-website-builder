import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left info block */}
        <div className={styles.info}>
          © 2025 Your Company. All rights reserved.
        </div>

        {/* Navigation links */}
        <div className={styles.links}>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;