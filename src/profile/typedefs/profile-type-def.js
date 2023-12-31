import { gql } from "graphql-tag";

export const profileTypeDef = gql`
  enum Gender {
    BOY
    GIRL
    NON_BINARY
    UNDISCLOSED
  }

  type Kids {
    age: Int
    gender: Gender
  }

  type Profile {
    id: ID
    userId: ID
    username: String
    gender: Gender
    kids: [Kids]
    created: Date
    updated: Date
  }

  extend type Query {
    profileByUserId(userId: ID): Profile
  }
`;
