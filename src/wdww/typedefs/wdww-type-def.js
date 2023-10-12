import { gql } from "graphql-tag";

export const wdwwTypeDef = gql`

  type Game {
    id: ID,
    winner: ID
  }

  type Room {
    id: ID
    status: String
    playerIds: [ID]
    game: Game
    started: Boolean
  }

  input RoomSearch {
    created: Range
    minPlayers: Range
    maxPlayers: Range
    name: String
    players: [ID]
    started: Boolean
    updated: Range
    pages: Range
    perPage: Int
  }
  
  type RoomNodes {
    nodeCount: Int
    nodes: [Room]
  }
  
  extend type Query {
    roomById(roomId: ID): Room
    rooms(search: RoomSearch): RoomNodes
  }
`;
