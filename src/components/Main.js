import styles from "./Main.module.css";
import clsx from "../lib/clsx";

function Main(props) {
  return (
    <main className={clsx(styles.main, props.darkMode ? styles.dark : "")}>
      <h1 className={styles.main__title}>Fun facts about React</h1>
      <ul className={styles.main__facts}>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

export default Main;
