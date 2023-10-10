import { findRoomByIdService } from "../../services/find-room-by-id-service.js";

export const roomById = (parent, args) => {
  const roomId = parent?.roomId || args.roomId;
  return findRoomByIdService({ roomId });
};
