import { roomById } from "./query/room-by-id.js";
import { rooms } from "./query/rooms.js";

export const wdwwResolver = {
  Query: {
    roomById,
    rooms
  }
};
