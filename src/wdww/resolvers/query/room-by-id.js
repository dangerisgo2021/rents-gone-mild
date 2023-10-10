import { findRoomByIdService } from "../../services/findRoomByIdService";

export const roomById = (parent, args) => {
  const roomId = parent?.roomId || args.roomId;
  return findRoomByIdService({ roomId });
};
