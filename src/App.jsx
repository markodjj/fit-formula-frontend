// import { useEffect, useState } from "react";

// import "./App.css";

// function App() {
//   const [data, setData] = useState([]); // Corrected useState
//   const API_URL = import.meta.env.VITE_BACKEND_URL; // Corrected variable name
//   const PORT = import.meta.env.VITE_PORT;
//   const ENV = import.meta.env.VITE_NODE_ENV;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let api_url = "";
//         if (ENV === "development") {
//           api_url = PORT;
//         } else if (ENV === "prodaction") {
//           api_url = API_URL;
//         }
//         console.log(api_url);
//         const response = await fetch(`${api_url}/api/nutritions/all`);

//         const result = await response.json();
//         console.log(result);
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <div>Result</div>
//       <div>
//         <ul>
//           {data.map((item, index) => (
//             <li key={index}>
//               <label>{item.name}</label>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default App;
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BMRCalculator from "./components/Calculators/BMRCalculator.jsx";
import TDEECalculator from "./components/Calculators/TDEECalculator.jsx";
import CaloriesCalculator from "./components/Calculators/CaloriesCalculator.jsx";
import TablePage from "./pages/TablePage.jsx";

import Navigation from "./pages/Navigation.jsx";
import Footer from "./pages/Footer.jsx";
import CalculatorPage from "./pages/CalculatorPage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import ComparePage from "./pages/ComparePage.jsx";
import "./style/global.scss";

import LoginPage from "./pages/LoginPage";
import Registration from "./pages/Registration";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        {/* <Route path='/calculator/kalorije-kalkulator' element={<CalculatorPage type={"kalorije-kalkulator"} />} />
        <Route path='/calculator/tdee-kalkulator' element={<CalculatorPage type={"tdee-kalkulator"} />} />
        <Route path='/calculator/bmr-kalkulator' element={<CalculatorPage type={"bmr-kalkulator"} />} /> */}

        <Route path="/bmr-kalkulator" element={<BMRCalculator />} />
        <Route path="/tdee-kalkulator" element={<TDEECalculator />} />
        <Route path="/kalorije-kalkulator" element={<CaloriesCalculator />} />

        <Route path="/calculator/:type" element={<CalculatorPage />} />
        <Route path="/tablica/" element={<TablePage />} />
        <Route path="/tablica/:type" element={<TablePage />} />
        <Route path="/article/" element={<ArticlePage />} />
        <Route path="/article/:name" element={<ArticlePage />} />
        <Route path="/uporedi" element={<ComparePage />} />

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<Registration />} />

        {/* <Route path='/onama' element={< />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
