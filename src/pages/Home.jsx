import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../components/User/LoginButton";
import { LogOutButton } from "../components/User/LogOutButton";

const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
      Home
      {isAuthenticated ? (
        <>
          {}
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

export default Home;
