import React, { useState } from 'react'

export default function MyComponent2() {
    const [foods, setFoods] = useState(["apples","carrots","pineapples"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodinput").value;
        document.getElementById("foodinput").value = "";
        setFoods(f => [...f, newFood]);

    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index));


    }
  

  return (
    <div>
      <h2>List of foods</h2>
      <ul>
        {foods.map((food, index) => 
            <li key={index} onClick={() =>handleRemoveFood(index)}>
                {food}
                </li>
        )}
      </ul>
      <input type="text " id='foodinput' placeholder='Enter food name' />
      <button onClick={handleAddFood}>Add food</button>

    </div>
  )
}
