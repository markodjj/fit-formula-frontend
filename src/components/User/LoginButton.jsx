import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignIn = () => {
    loginWithRedirect({
      redirectUri: "http://localhost:5173/registration", // Redirect to the dashboard page after login
    });
  };

  return <button onClick={handleSignIn}>Sign In</button>;
};
