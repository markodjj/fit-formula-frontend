import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState([]); // Corrected useState
  const API_URL = import.meta.env.VITE_BACKEND_URL; // Corrected variable name

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(API_URL);
        const response = await fetch(`${API_URL}/api/nutritions/all`);
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
