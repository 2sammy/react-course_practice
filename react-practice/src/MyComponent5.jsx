import React, {useState, useEffect } from 'react'
export default function MyComponent5() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
     window.addEventListener("resize", handleResize);
     console.log("EVENT LISYTENER ADDED");

     function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
     }





  return (
    <div>
      <p>Window Width: {width}</p>
      <p>Window Width: {height}</p>
    </div>
  );
}
