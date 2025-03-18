import React, { useState } from 'react';

import './Calculator.scss';

function TDEECalculator() {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    gender: 'male',
    activityLevel: '1.2',
    goal: 'maintenance',
  });
  const [bmr, setBmr] = useState(null);
  const [tdee, setTdee] = useState(null);
  const [caloriesNeeded, setCaloriesNeeded] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateTDEE = (event) => {
    event.preventDefault();

    const { age, weight, height, gender, activityLevel, goal } = formData;
    let calculatedBMR;

    if (gender === 'male') {
      calculatedBMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      calculatedBMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    setBmr(calculatedBMR);

    const calculatedTDEE = calculatedBMR * parseFloat(activityLevel);
    setTdee(calculatedTDEE);

    let dailyCalories;
    if (goal === 'maintenance') {
      dailyCalories = calculatedTDEE;
    } else if (goal === 'slimming') {
      dailyCalories = calculatedTDEE * 0.85;
    } else if (goal === 'gaining') {
      dailyCalories = calculatedTDEE * 1.1;
    }
    setCaloriesNeeded(dailyCalories);
  };

  return (
    <div className="calculator">
      <div className="calculator-container">
        <h2 className="title">TDEE Calculator</h2>
        <form onSubmit={calculateTDEE} className="form">
          <div className="input-container">
            <div className='input-group'>
              <label>Gender *</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className='input-group'>
              <label>Age *</label>
              <input
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-group'>
              <label>Height (cm) *</label>
              <input
                name="height"
                type="number"
                value={formData.height}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-group'>
              <label>Weight (kg) *</label>
              <input
                name="weight"
                type="number"
                value={formData.weight}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-group'>
              <label>Activity Level *</label>
              <select
                name="activityLevel"
                value={formData.activityLevel}
                onChange={handleChange}
               required
              >
                <option value="1.2">Sedentary</option>
                <option value="1.375">Lightly Active</option>
                <option value="1.55">Moderately Active</option>
                <option value="1.725">Very Active</option>
                <option value="1.9">Super Active</option>
              </select>
            </div>
            <div className='input-group'>
              <label>Goal *</label>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
              >
                <option value="maintenance">Maintenance</option>
                <option value="slimming">Slimming</option>
                <option value="gaining">Gaining</option>
              </select>
            </div>
          </div>
          <button type="submit">
            Calculate TDEE & Calories
          </button>
        </form>

        {bmr && (
          <h3 className="result">Your BMR: {bmr.toFixed(2)} calories/day</h3>
        )}
        {tdee && (
         <h3 className="result">Your TDEE: {tdee.toFixed(2)} calories/day</h3>
        )}
        {caloriesNeeded && (
           <h3 className="result">
           Daily Calories for {formData.goal.charAt(0).toUpperCase() + formData.goal.slice(1)}: {caloriesNeeded.toFixed(2)} calories/day
         </h3>
        )}
      </div>
    </div>
  );
}

export default TDEECalculator;
