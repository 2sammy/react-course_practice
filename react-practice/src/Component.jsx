import React, {useState} from "react";

export default function Component() {
    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const  [isEmployed, setIsEmployed] = useState(false);
    



    const updateName = () => {
        setName("samuel")
    }
    const incrementAge = () =>{
        setAge(age + 1);
    }

    const toggleEmployedStatus = ( ) => {
        setIsEmployed(!isEmployed);
    }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>set my Name</button>
    
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      
      <p>Is employed: {isEmployed ? "yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Taggle status</button>
    </div>
  )
}
