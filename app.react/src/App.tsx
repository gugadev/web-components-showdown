import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <article className="App-body">
        <one-button kind="primary">
          Primary
        </one-button>
      </article>
    </div>
  );
}

export default App;
