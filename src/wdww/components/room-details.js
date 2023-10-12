import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../../session/components/login-button.js";
import styles from "../css/lobby.module.scss";
import { useStore } from "../../store/hooks/use-store.js";
import { joinRoomButtonClickedAction } from "../actions/join-room-button-clicked-action.js";
import { useQuery } from '@apollo/client';
import { roomDetailsQuery } from "../queries/room-details-query.js";
import { useRouter } from 'next/router'

export const RoomDetails = () => {
  const { query: { slug } } = useRouter()
  const { user } = useAuth0();
  
  const { loading, error, data } = useQuery(roomDetailsQuery, {variables: { roomId: slug }});
  const { dispatch } = useStore()
  const handleJoinRoomButtonClicked = () => {
    dispatch(joinRoomButtonClickedAction( {roomId: slug}, {sendToServer: true}))
  }
  
  const { id, playerIds } = data?.roomById || {}
  console.log({data, user})
  return (
    <div className={styles.lobby}>
      <h3>The Room</h3>
      {user ? <button onClick={handleJoinRoomButtonClicked}>Join Room</button> : <LoginButton />}
      {loading && <p>Loading...</p>}
      {error && <p>Error : {error.message}</p>}
      {id && <p>Id : {id}</p>}
      {playerIds
        &&  <ul>
              {
                playerIds.map((player) => <li key={player}>{player}</li>)
              }
            </ul>}
    </div>
  );
};
