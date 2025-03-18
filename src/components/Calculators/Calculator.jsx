import React, { useState, useEffect } from 'react';
import CalculatorInput from './CalculatorInput';

const Calculator = ({ type }) => {
    const calculatorsData = {
        "kalorije-kalkulator": {
            gender: { type: 'selection', default: 'Male', label: "Gender *", options: ["Male", "Female"] },
            age: { type: 'number', default: '', label: "Age *" },
            height: { type: 'number', default: '', label: "Height (cm) *" },
            weight: { type: 'number', default: '', label: "Weight (kg) *" },
            activityLevel: { type: 'selection', default: 'Sedentary', label: "Activity Level *", options: ["Sedentary", "Lightly Active", "Moderately Active", "Very Active", "Super Active"] },
            goal: { type: 'selection', default: 'Slimming', label: "Goal *", options: ["Slimming", "Gaining", "Odrzavanje"] },
            caloriesResult: { type: null, default: '', label: "" },
            title: { type: null, value: "Kalkulator kalorija" },
            button: { type: null, value: "Izracunaj kalorije" },
        },
        "bmr-kalkulator": {
            gender: { type: 'selection', default: 'Male', label: "Gender *", options: ["Male", "Female"] },
            age: { type: 'number', default: '', label: "Age *" },
            height: { type: 'number', default: '', label: "Height (cm) *" },
            weight: { type: 'number', default: '', label: "Weight (kg) *" },
            bmrResult: { type: null, default: '', label: "" },
            title: { type: null, value: "Kalkulator BMR" },
            button: { type: null, value: "Izracunaj BMR" },
        },
        "tdee-kalkulator": {
            gender: { type: 'selection', default: 'Male', label: "Gender *", options: ["Male", "Female"] },
            age: { type: 'number', default: '', label: "Age *" },
            height: { type: 'number', default: '', label: "Height (cm) *" },
            weight: { type: 'number', default: '', label: "Weight (kg) *" },
            tdeeResult: { type: null, default: '', label: "" },
            title: { type: null, value: "Kalkulator TDEE" },
            button: { type: null, value: "Izracunaj TDEE" },
        }
    };

    // Function to initialize form data based on the selected calculator type
    const initializeFormData = () => {
        return Object.fromEntries(
            Object.entries(calculatorsData[type])
                .filter(([_, value]) => value.type !== null)
                .map(([key, value]) => [key, value.default ?? ''])
        );
    };

    const [formData, setFormData] = useState(initializeFormData());

    // Reset formData when type changes
    useEffect(() => {
        setFormData(initializeFormData());
    }, [type]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Calculation functions
    const calculateCalories = (event) => {
        event.preventDefault();

        const genderCoef = { Male: 5, Female: -161 };
        const activityCoef = { Sedentary: 1.2, "Lightly Active": 1.375, "Moderately Active": 1.55, "Very Active": 1.725, "Super Active": 1.9 };
        const goalCoef = { Slimming: 0.85, Gaining: 1.15, Odrzavanje: 1 };

        const bmrCurr = 10 * formData.weight + 6.25 * formData.height - 5 * formData.age + genderCoef[formData.gender];
        const currResult = bmrCurr * activityCoef[formData.activityLevel] * goalCoef[formData.goal];

        setFormData({ ...formData, caloriesResult: currResult });
    };

    const calculateBMR = (event) => {
        event.preventDefault();

        const bmr = formData.gender === 'Male'
            ? 10 * formData.weight + 6.25 * formData.height - 5 * formData.age + 5
            : 10 * formData.weight + 6.25 * formData.height - 5 * formData.age - 161;

        setFormData({ ...formData, bmrResult: bmr });
    };

    const calculateTDEE = (event) => {
        event.preventDefault();

        const activityCoef = { Sedentary: 1.2, "Lightly Active": 1.375, "Moderately Active": 1.55, "Very Active": 1.725, "Super Active": 1.9 };

        const bmr = formData.gender === 'Male'
            ? 10 * formData.weight + 6.25 * formData.height - 5 * formData.age + 5
            : 10 * formData.weight + 6.25 * formData.height - 5 * formData.age - 161;

        const tdee = bmr * activityCoef[formData.activityLevel];

        setFormData({ ...formData, tdeeResult: tdee });
    };

    // Dynamically assign calculation function based on type
    const calculationFunctions = {
        "kalorije-kalkulator": calculateCalories,
        "bmr-kalkulator": calculateBMR,
        "tdee-kalkulator": calculateTDEE
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (calculationFunctions[type]) {
            calculationFunctions[type](event);
        }
    };

    return (
        <div className="calculator">
            <div className="calculator-container">
                <h2 className="title">{calculatorsData[type].title.value}</h2>
                <form onSubmit={handleSubmit} className="form">
                    <ul className="input-container">
                        {Object.entries(calculatorsData[type])
                            .filter(([_, value]) => value.type !== null)
                            .map(([key, value], index) => (
                                <CalculatorInput
                                    key={index}
                                    name={key}
                                    inputData={value}
                                    value={formData[key]}
                                    handleChange={handleChange}
                                />
                            ))}
                    </ul>
                    <button type="submit">
                        {calculatorsData[type].button.value}
                    </button>
                </form>

                {type === "kalorije-kalkulator" && formData.caloriesResult && (
                    <h3 className="result">Your Daily Calories: {formData.caloriesResult.toFixed(2)} kcal/day</h3>
                )}
                {type === "bmr-kalkulator" && formData.bmrResult && (
                    <h3 className="result">Your BMR: {formData.bmrResult.toFixed(2)} kcal/day</h3>
                )}
                {type === "tdee-kalkulator" && formData.tdeeResult && (
                    <h3 className="result">Your TDEE: {formData.tdeeResult.toFixed(2)} kcal/day</h3>
                )}
            </div>
        </div>
    );
};

export default Calculator;
