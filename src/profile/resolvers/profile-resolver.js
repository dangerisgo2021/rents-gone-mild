import { profileByUserId } from "./query/profile-by-user-id.js";

export const profileResolver = {
  Query: {
    profileByUserId,
  }
};
