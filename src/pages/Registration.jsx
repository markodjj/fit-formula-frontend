import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import CreateUser from "../components/User/CreateUser";

import axios from "axios";

const Registration = () => {
  const { getAccessTokenSilently, user, isAuthenticated, isLoading } =
    useAuth0();
  const navigate = useNavigate();
  const [userUsername, setUserUsername] = useState(null);
  const getData = async (e) => {
    // e.preventDefault();

    if (!user) {
      console.log("User data not available. Please log in.");
      return;
    }

    try {
      const token = await getAccessTokenSilently({
        authorizationParams: { audience: "https://fit-formula-api" },
      });

      const response = await axios.get(
        "http://localhost:5001/user/profile", // No auth0Id in URL anymore
        {
          headers: {
            Authorization: `Bearer ${token}`, // Secure authentication
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.username) {
        setUserUsername(response.data.username);
      }
    } catch (error) {
      setUserUsername(null);
      console.error(
        "Error fetching user data:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    getData();
  }, [getData, user]);

  useEffect(() => {
    if (userUsername) {
      navigate("/");
    }

    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate, userUsername]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Redirecting...</div>;
  }
  return (
    <div>
      Registration
      <CreateUser />
    </div>
  );
};

export default Registration;
