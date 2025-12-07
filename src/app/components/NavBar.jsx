import styles from '../styles/NavBar.module.scss';

const NavBar = () => {
  const navigationLinks = [
    'portfolio',
    'e-commerce',
    'blog',
    'event',
    'non-profit',
    'saas'
  ];

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="/" className={styles.logo}>
          StylePress
        </a>

        {/* Navigation Links */}
        <nav className={styles.links}>
          {navigationLinks.map((link, index) => (
            <a
              key={link}
              href={`/${link}`}
              className={`
                ${index === 0 ? styles.first : ''}
                ${index === navigationLinks.length - 1 ? styles.last : ''}
                ${index !== navigationLinks.length - 1 ? styles.divider : ''}
              `}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Profile / Avatar */}
        <div className={styles.profile}>
          <img src="/globe.svg" alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;