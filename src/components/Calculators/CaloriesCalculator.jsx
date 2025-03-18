import React, { useState } from 'react';
import './Calculator.scss';

function CaloriesCalculator() {
  const [formData, setFormData] = useState({
    gender: 'male',
    age: '',
    height: '',
    weight: '',
    activityLevel: 'ne',
    goal: 'mrsavljenje',
    caloriesResult: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const genderCoef = {
    male: 5,
    female: -161,
  };

  const activityCoef = {
    ne: 1.2,
    malo: 1.375,
    umereno: 1.55,
    veoma: 1.725,
    ekstremno: 1.9,
  };

  const goalCoef = {
    mrsavljenje: 0.85,
    Gojenje: 1.15,
    Odrzavanje: 1,
  };

  const calculateCalories = (event) => {
    event.preventDefault();
    console.log(formData);
    const bmrCurr = 10 * formData.weight + 6.25 * formData.height - 5 * formData.age + genderCoef[formData.gender];
    const currResult = bmrCurr * activityCoef[formData.activityLevel] * goalCoef[formData.goal];

    setFormData({ ...formData, caloriesResult: currResult });
  };

  return (
    <div className="calculator">
      <div className="calculator-container">
        <h2 className="title">Calories Calculator</h2>
        <form onSubmit={calculateCalories} className="form">
          <div className="input-container">
            <div className='input-group'>
              <label>Age *</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-group'>
              <label>Height (cm) *</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-group'>
              <label>Weight (kg) *</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
              />
            </div>
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
              <label>Activity Level *</label>
              <select
                name="activityLevel"
                value={formData.activityLevel}
                onChange={handleChange}
                required
              >
                <option value="ne">Sedentary</option>
                <option value="malo">Lightly Active</option>
                <option value="umereno">Moderately Active</option>
                <option value="veoma">Very Active</option>
                <option value="ekstremno">Super Active</option>
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
                <option value="mrsavljenje">Slimming</option>
                <option value="Gojenje">Gaining</option>
                <option value="Odrzavanje">Maintenance</option>
              </select>
            </div>
          </div>
          <button type="submit">
            Calculate Calories
          </button>
        </form>
        {formData.caloriesResult && (
          <h3 className="result">
            Your Daily Calories: {formData.caloriesResult.toFixed(2)} calories/day
          </h3>
        )}
      </div>
    </div>
  );
}

export default CaloriesCalculator;
