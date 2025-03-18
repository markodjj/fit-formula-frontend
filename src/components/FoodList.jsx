import React, { useState, useEffect } from 'react'
import axios from 'axios'


function FoodList() {
    const [foods, setFoods] = useState([]);

    const fetchData = async () => {
        
        try {
            const response = await axios.get('http://localhost:5000/api/food');
            setFoods(response.data);
            console.log(foods);
        
        } catch (error) {
            console.error('Error fetching food data: ', error);
        }

        
    }
    useEffect(()=>{
        fetchData();
    }, []);
  return (
    <div>
        <h1>Food List</h1>
        <ul>
            {foods.map((food) => (
                <li key={food._id}>
                    {food.name} - Calories: {food.calories}
                </li>
            ))}
        </ul>
    </div>
  )

}

export default FoodList