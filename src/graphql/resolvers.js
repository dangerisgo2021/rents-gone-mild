import { GraphQLScalarType } from "graphql";
import  { merge } from "lodash";
import { wdwwResolver } from "../wdww/resolvers/wdwwResolver.js";

const { profileResolver } = require("../profile/resolvers/profileResolver.js");

const rootResolver = {
  Mutation: {
    ping: () => "Mutation pong",
  },
  Query: {
    ping: () => "Query pong",
  },
  Date: new GraphQLScalarType({
    name: "Date",
    description: "milliseconds since epoch",
    parseValue(value) {
      return value; // value from the client
    },
    serialize(value) {
      return value; // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
};

export const resolvers = merge(rootResolver, profileResolver, wdwwResolver);
