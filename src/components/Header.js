import logo from "../logo.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <img src={logo} className={styles.navLogo} alt="logo" />
        <ul className={styles.navItems}>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
