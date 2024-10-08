import logo from "../images/logo.svg";
import styles from "./Navbar.module.css";
import clsx from "../lib/clsx";

function Navbar(props) {
  return (
    <nav className={clsx(styles.nav, props.darkMode ? "dark" : "")}>
      <img src={logo} alt="logo" className={styles.nav__logo_icon} />
      <h3 className={styles.nav__logo_text}>ReactFacts</h3>

      <div className={styles.toggler}>
        <p className={styles.toggler__light}>Light</p>
        <div className={styles.toggler__slider} onClick={props.toggleDarkMode}>
          <div className={styles.toggler__slider__circle}></div>
        </div>
        <p className={styles.toggler__dark}>Dark</p>
      </div>
    </nav>
  );
}

export default Navbar;
