import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

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
        <span className="Clock">
        </span>
      </header>
      <p>{message}</p>
    </div>
  );
}

export default App;
