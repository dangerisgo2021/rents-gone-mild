import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { resolvers } from "../../src/graphql/resolvers.js";
import { typeDefs } from "../../src/graphql/type-defs.js";
import { getUserFromAuthorizationHeaderService } from "../../src/user/service/get-user-from-authorization-header.js"

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server, {
  context: async (req) => ({
    userId: await getUserFromAuthorizationHeaderService({
      authenticationHeader: req.headers.authorization,
    }),
  }),
});
