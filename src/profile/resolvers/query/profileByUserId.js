const {
  findProfileByUserIdService,
} = require("../../services/findProfileByUserIdService");
export const profileByUserId = (parent, args) => {
  return findProfileByUserIdService({ userId: args.userId });
};
