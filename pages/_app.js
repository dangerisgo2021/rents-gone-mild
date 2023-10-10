import { Auth0Provider } from "@auth0/auth0-react";
import { GraphqlProvider } from "../src/graphql/components/graphql-provider.js";
import { SessionProvider } from "../src/session/components/session-provider.js";
import { Layout } from "../src/layout/components/layout.js";
import { StoreProvider } from "../src/store/components/store-provider.js";
import "../src/layout/css/reset.css";



export default ({ Component, pageProps }) => {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: process.env.NEXT_PUBLIC_AUTH_REDIRECT_URI,
      }}
    >
      <GraphqlProvider>
        <StoreProvider>
          <SessionProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SessionProvider>
        </StoreProvider>
      </GraphqlProvider>
    </Auth0Provider>
  );
};
