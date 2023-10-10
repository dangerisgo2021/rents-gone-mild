import { graphqlClient } from "../graphql-client.js";
import { ApolloProvider } from '@apollo/client';


export const GraphqlProvider = ({ children }) => {
  return (
    <ApolloProvider client={graphqlClient}>{children}</ApolloProvider>
  );
};
