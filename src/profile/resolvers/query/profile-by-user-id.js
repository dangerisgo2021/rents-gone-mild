const {
  findProfileByUserIdService,
} = require("../../services/find-profile-by-user-id-service.js");
export const profileByUserId = (parent, args) => {
  const userId = parent?.userId || args.userId;
  return findProfileByUserIdService({ userId });
};
