import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const CreateUser = () => {
  const { getAccessTokenSilently, user } = useAuth0();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!user) {
      setError("User data not available. Please log in.");
      return;
    }

    try {
      const token = await getAccessTokenSilently({
        authorizationParams: { audience: "https://fit-formula-api" },
      });

      const userInfo = {
        // auth0Id: user.sub, // Unique user ID from Auth0
        email: user.email, // Email from Auth0
        username, // User-entered username
      };

      const response = await axios.post(
        "http://localhost:5001/user/create-user", // Update with your backend URL
        userInfo,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Secure authorization
            "Content-Type": "application/json",
          },
        }
      );

      console.log("User created:", response.data);
    } catch (error) {
      console.error(
        "Error creating user:",
        error.response?.data || error.message
      );
      setError("Failed to create user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Complete Your Registration</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Create User"}
        </button>
      </form>
    </div>
  );
};

export default CreateUser;

// import React, { useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import axios from "axios";

// const CreateUser = () => {
//   const { getAccessTokenSilently, user } = useAuth0();
//   const [username, setUsername] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     if (!user) {
//       setError("User data not available. Please log in.");
//       return;
//     }

//     try {
//       const token = await getAccessTokenSilently({
//         authorizationParams: { audience: "https://fit-formula-api" },
//       });

//       const userInfo = {
//         auth0Id: user.sub, // Unique user ID from Auth0
//         email: user.email, // Email from Auth0
//         username, // User-entered username
//       };

//       const response = await axios.post(
//         "http://localhost:5000/user/create-user", // Update with your backend URL
//         userInfo,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Secure authorization
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("User created:", response.data);
//     } catch (error) {
//       console.error(
//         "Error creating user:",
//         error.response?.data || error.message
//       );
//       setError("Failed to create user. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Complete Your Registration</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter your username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? "Submitting..." : "Create User"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateUser;
