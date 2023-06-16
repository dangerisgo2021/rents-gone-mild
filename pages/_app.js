import { Auth0Provider } from "@auth0/auth0-react";
import { SessionProvider } from "../src/session/session-provider.js";
import { Layout } from "../src/components/layout.js";
import "../src/css/reset.css"

export default ({ Component, pageProps }) => {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: process.env.NEXT_PUBLIC_AUTH_REDIRECT_URI,
      }}
    >
      <SessionProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Auth0Provider>
  );
};
