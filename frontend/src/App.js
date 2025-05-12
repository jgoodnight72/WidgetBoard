import logo from './logo.svg';
import sun from './sun.svg';
import moon from './moon.png';
import './App.css';
import {useEffect, useState} from 'react';
import Clock from 'react-live-clock';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/app/home')
    .then(res => res.text())
    .then(data => setMessage(data))
    .catch((err) => console.error(err));;
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="ogo" />
        <h1>Widget Board</h1>
        <span className="Date-time">
          <Clock className="Date-clock" format={'dddd, MMMM Do YYYY'} timezone={'US/Pacific'}/>
          <span className="Time">
            <span className="AM-PM-logos">
              <img src={sun} className="AM-sun" alt="amSun"/>
              <img src={moon} className="PM-moon" alt="pmMoon"/>
            </span>
            <Clock className="Time-clock" format={'h:mm:ss'} ticking={true} timezone={'US/Pacific'}/>
            <span>PST</span>
          </span>
        </span>
      </header>
      <p>{message}</p>
    </div>
  );
}

export default App;
