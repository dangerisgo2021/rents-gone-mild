import styles from "../css/lobby.module.scss";
import { useStore } from "../../store/hooks/use-store.js";
import { createRoomButtonClickedAction } from "../actions/create-room-button-clicked-action.js";
import { lobbyQuery } from "../queries/lobby-query.js";
import { useQuery } from '@apollo/client';

export const Lobby = () => {
  
  const { loading, error, data } = useQuery(lobbyQuery);
  const { dispatch } = useStore()
  const handleCreateRoomButtonClicked = () => {
    dispatch(createRoomButtonClickedAction( undefined, {sendToServer: true}))
  }
  
  const {nodes} = data?.rooms || {}
  
  return (
    <div className={styles.lobby}>
      <h3>The Lobby</h3>
      <button onClick={handleCreateRoomButtonClicked}>Create Room</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error : {error.message}</p>}
      {nodes?.map(room => <div key={room?.id}><a href={`/wdww/room/${room.id}`}>Room {room?.id?.slice(-5)}</a></div>)}
    </div>
  );
};
