import sunLogo from '../sun.svg';
import moonLogo from '../moon.png';
import './Clock.css';
import { useState, useEffect } from 'react';

function GetDate() {
    const date = new Date();
    const day = date.getDate();
    const weekdayNum = date.getDay();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    let weekday;

    switch (true) {
    case weekdayNum === 0:
        weekday = "Sunday";
        break;
    case weekdayNum === 1:
        weekday = "Monday";
        break;
    case weekdayNum === 2:
        weekday = "Tuesday";
        break;
    case weekdayNum === 3:
        weekday = "Wednesday";
        break;
    case weekdayNum === 4:
        weekday = "Thursday";
        break;
    case weekdayNum === 5:
        weekday = "Friday";
        break;
    case weekdayNum === 6:
        weekday = "Saturday";
        break;
    default:
        weekday = "Monday";
    }

    let suffix = 'th';
    if (day % 10 === 1 && day !== 11) suffix = 'st';
    else if (day % 10 === 2 && day !== 12) suffix = 'nd';
    else if (day % 10 === 3 && day !== 13) suffix = 'rd';

    return `${weekday}, ${month} ${day}${suffix}, ${year}`;
}

function GetTime() {
    const date = new Date();
    return date.toLocaleTimeString();
}

function GetTimeLogo() {
    const hours = new Date().getHours();

    if (hours >= 12)
        return moonLogo;
    else
        return sunLogo;
}

export default function Clock() {
    
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

    return (
        <div className="date-and-time">
            <span className="date">{GetDate(time)}</span>
            <span className="time">
                <img className="time-logo" src={GetTimeLogo(time)} alt="TimeLogo"/>
                <span >{GetTime(time)}</span>
            </span>
        </div>
    );
}