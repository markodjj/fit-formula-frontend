import Calculator from "../components/Calculators/Calculator";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import BMRCalculator from "../components/Calculators/BMRCalculator";
import CaloriesCalculator from "../components/Calculators/CaloriesCalculator";
import TDEECalculator from "../components/Calculators/TDEECalculator";
import calculatorsData from "../data/calculators.json";

import PlanOffer from "../components/Ad/PlanOffer";

import "./CalculatorPage.scss";

const CalculatorPage = () => {
  const { type } = useParams();
  const calcRef = useRef();

  const calculators = {
    "bmr-kalkulator": <BMRCalculator />,
    "kalorije-kalkulator": <CaloriesCalculator />,
    "tdee-kalkulator": <TDEECalculator />,
  };
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="calculator-page">
      <div className="hero">
        <div className="left-side">
          <h1 className="">{calculatorsData[type].h1}</h1>

          <p>{calculatorsData[type].p1}</p>
          <ul>
            {calculatorsData[type].ul.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{calculatorsData[type].p2}</p>

          <button onClick={() => scrollToSection(calcRef)}>
            {calculatorsData[type].btn}
          </button>
        </div>
        <div className="right-side">
          <PlanOffer planName={"Plan-ad_owvq7l"} />
        </div>
      </div>

      {<div ref={calcRef}>{calculators[type]}</div> || (
        <p>Calculator not found</p>
      )}
    </div>
  );
};

export default CalculatorPage;
