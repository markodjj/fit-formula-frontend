import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState([]); // Corrected useState
  const API_URL = import.meta.env.BACKEND_URL; // Corrected variable name

  useEffect(() => {
    const fetchData = async () => {
      try {
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
        {data.length > 0 ? (
          data.map((item, indx) => <p key={indx}>{item}</p>)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default App;
