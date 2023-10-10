import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = "http://localhost:3000/api/graphql" //process.env.GRAPHQL_URI;
console.log({uri})
export const graphqlClient = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});
