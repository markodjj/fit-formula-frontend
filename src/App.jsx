import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState([]); // Corrected useState
  const API_URL = import.meta.env.VITE_BACKEND_URL; // Corrected variable name
  const PORT = import.meta.env.VITE_PORT;
  const ENV = import.meta.env.VITE_NODE_ENV;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let api_url = "";
        if (ENV === "development") {
          api_url = PORT;
        } else if (ENV === "prodaction") {
          api_url = API_URL;
        }
        console.log(api_url);
        const response = await fetch(`${api_url}/api/nutritions/all`);

        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>Result</div>
      <div>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <label>{item.name}</label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
