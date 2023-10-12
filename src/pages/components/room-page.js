import { RoomDetails } from "../../wdww/components/room-details.js";

import styles from "../css/home-page.module.scss";
export const RoomPage = () => {
  return (
    <div className={styles.homepage}>
      <RoomDetails />
    </div>
  );
};
