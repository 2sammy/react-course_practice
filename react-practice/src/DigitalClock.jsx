import React, {useState, useEffect} from "react"

export default function DigitalClock() {
    const [time, setTIme] = useState(new Date())

    useEffect(() => {
        const intervalid = setInterval(() => {
            setTIme(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalid)

        }
    }, []);
    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridian = hours >= 12 ? "pm" : "am"

        hours = hours % 12 || 12

        return `${padZero(hours)}: ${padZero(minutes)}: ${padZero(seconds)} ${meridian}`;
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }



    return (
    <div className="clock-container">
        <div className="clock">
            <span>{formatTime}</span>
        </div>
      
    </div>
  )
}