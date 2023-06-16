import { LoginButton } from "../src/components/login-button.js";
import styles from "../src/css/home-page.module.scss";

export default () => {
  return (
    <div className={styles.homepage}>
      <h1 className={styles.title}>Rents Gone Mild</h1>
      <h2 className={styles.tagline}>Embrace the Dadventure!</h2>
      <LoginButton />
    </div>
  );
};
