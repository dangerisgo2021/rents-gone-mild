import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect, logout, user } = useAuth0();
  
  return user ? (
    <button
      onClick={() => {
        logout();
      }}
    >
      Logout
    </button>
  ) : (
    <button
      onClick={() => {
        loginWithRedirect();
      }}
    >
      Login
    </button>
  );
};
