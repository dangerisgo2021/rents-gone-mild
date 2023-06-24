import { LoginButton } from "../../session/components/login-button.js";
import { Profile } from "../../profile/components/profile.js";

import styles from "../css/home-page.module.scss";
export const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <h1 className={styles.title}>Rents Gone Mild</h1>
      <h2 className={styles.tagline}>Embrace the Dadventure!</h2>
      <LoginButton />
      <Profile />
    </div>
  );
};
