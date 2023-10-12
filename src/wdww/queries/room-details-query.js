import { gql } from '@apollo/client';

export const roomDetailsQuery = gql`
  query RoomDetails($roomId: ID) {
    roomById(roomId: $roomId) {
      id
      status
      players
    }
  }
`;