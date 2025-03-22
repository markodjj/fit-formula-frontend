import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../components/User/LoginButton";
import { LogOutButton } from "../components/User/LogOutButton";

const LoginPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      LoginPage
      {isAuthenticated ? (
        <>
          <p>Welcome {user.email}</p>

          <LogOutButton />
        </>
      ) : (
        <>
          <LoginButton />
        </>
      )}
    </div>
  );
};

export default LoginPage;
