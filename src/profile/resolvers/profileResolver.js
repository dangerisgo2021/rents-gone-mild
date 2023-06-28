import { profileByUserId } from "./query/profileByUserId.js";

export const profileResolver = {
  Query: {
    profileByUserId,
  }
};
