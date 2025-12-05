import styles from '../styles/NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <a href="/" className={styles.logo}>StylePress</a>
      <div className={styles.links}>
        <a href="/placeholder">Portfolio</a>
        <a href="/placeholder">E Commerce</a>
        <a href="/placeholder">Blog</a>
        <a href="/placeholder">Event</a>
        <a href="/placeholder">Non-Profit</a>
        <a href="/placeholder">SaaS</a>
      </div>
      <div className={styles.profile}>
        <img src="/globe.svg" />
      </div>
    </div>
  );
};

export default NavBar;
