const {
  findProfileByUserIdService,
} = require("../../services/findProfileByUserIdService");
export const profileByUserId = (parent, args) => {
  const userId = parent?.userId || args.userId;
  return findProfileByUserIdService({ userId });
};
