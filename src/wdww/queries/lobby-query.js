import { gql } from '@apollo/client';

export const lobbyQuery = gql`
  query Lobby {
    rooms {
      nodeCount
      nodes {
        id
        started
      }
    }
  }
`;