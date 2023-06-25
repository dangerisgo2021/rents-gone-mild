import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";
import { getUserFromAuthorizationHeaderService } from "../../src/user/service/getUserFromAuthorizationHeader.js";

const resolvers = {
  Query: {
    hello: () => "world",
    profileByUser: (parent, args, context) => {
      console.log({ parent, args, context });

      return {
        userId: context.userId,
        username: "wrong",
      };
    },
  },
};

const typeDefs = gql`
  enum GENDER {
    BOY
    GIRL
    OTHER
    UNDISCLOSED
  }

  type KidProfile {
    age: Int
    gender: GENDER
  }

  type Profile {
    username: String
    userId: ID
    gender: GENDER
    kids: [KidProfile]
  }

  type Query {
    hello: String
    profileByUser: Profile
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({
    userId: await getUserFromAuthorizationHeaderService({
      authenticationHeader: req.headers.authorization,
    }),
  }),
});
