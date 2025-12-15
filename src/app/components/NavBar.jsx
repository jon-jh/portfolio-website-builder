"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/NavBar.module.scss";
import NavButton from "./NavButton"; // import your new component

const NavBar = () => {
  const pathname = usePathname();
  const navigationLinks = ["portfolio", "e-commerce", "wordpress", "event"];

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          StylePress
        </Link>

        {/* Navigation Links */}
        <nav className={styles.links}>
          {navigationLinks.map((link) => {
            const href = `/${link}`;
            const isActive = pathname === href;

            return (
              <NavButton key={link} href={href} isActive={isActive}>
                {link}
              </NavButton>
            );
          })}
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
