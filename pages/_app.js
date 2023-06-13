import { Auth0Provider } from "@auth0/auth0-react";
import { SessionProvider } from "../src/session/session-provider.js";

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
        <Component {...pageProps} />
      </SessionProvider>
    </Auth0Provider>
  );
};
