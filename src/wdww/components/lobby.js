import styles from "../css/lobby.module.scss";
import { useStore } from "../../store/hooks/useStore.js";
import { createRoomButtonClickedAction } from "../actions/createRoomButtonClickedAction.js";
import { lobbyQuery } from "../queries/lobbyQuery.js";
import { useQuery } from '@apollo/client';
console.log("hi")
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
      {nodes?.map(room => <div key={room?.id}><h4>Room {room?.id?.slice(0,5)}</h4></div>)}
    </div>
  );
};
