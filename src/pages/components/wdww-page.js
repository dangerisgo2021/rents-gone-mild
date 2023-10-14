import { LoginButton } from "../../session/components/login-button.js";
import { Lobby } from "../../wdww/components/lobby.js";
import { WhoWhatWhereGame } from "../../wdww/components/who-what-where-game.js";

import styles from "../css/wdww-page.module.scss";
export const WdwwPage = () => {
  return (
    <div className={styles.WdwwPage}>
      <h1 className={styles.title}>Who did what when</h1>
      <h2 className={styles.tagline}>Conquer History with Friends </h2>
      <LoginButton />
      <WhoWhatWhereGame />
      <Lobby />
    </div>
  );
};
