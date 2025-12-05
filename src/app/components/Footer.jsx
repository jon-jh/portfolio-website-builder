import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="/" className={styles.logo}>StylePress</a>
      <div className={styles.links}>
        <a href="/placeholder">Link a</a>
        <a href="/placeholder">Link b</a>
        <a href="/placeholder">Link c</a>
      </div>
    </div>
  );
};

export default Footer;
