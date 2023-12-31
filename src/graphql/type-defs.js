import { gql } from "graphql-tag";
import { profileTypeDef } from "../profile/typedefs/profile-type-def.js";
import { wdwwTypeDef } from "../wdww/typedefs/wdww-type-def.js";

// Construct a schema, using GraphQL schema language
// All imported typeDefs extend the below rootType
const rootTypeDef = gql`
  scalar Date

  input Range {
    start: Int
    end: Int
  }

  type Query {
    _empty: String
    ping: String
  }

  type Mutation {
    ping: String
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

// Since typeDefs need to be exported as arrays when there are sub-type
// flattening the list means the arrays dont need to be spread individually
export const typeDefs = [rootTypeDef, profileTypeDef, wdwwTypeDef].flat(1);
