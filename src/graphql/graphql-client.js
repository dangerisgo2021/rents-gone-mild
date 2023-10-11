import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = process.env.NEXT_PUBLIC_GRAPHQL_URI;
console.log({uri})
export const graphqlClient = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});
