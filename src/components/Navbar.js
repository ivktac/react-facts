import logo from "../images/logo.svg";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <img src={logo} alt="logo" className={styles.navLogo} />
      <h3 className={styles.navLogoText}>ReactFacts</h3>
      <h4 className={styles.navTitle}>React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
