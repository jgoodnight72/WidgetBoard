import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Clock from './components/Clock';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/app/home')
    .then(res => res.text())
    .then(data => setMessage(data))
    .catch((err) => console.error(err));;
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1>Widget Board</h1>
        <Clock/>
      </header>
      <p>{message}</p>
    </div>
  );
}

export default App;
