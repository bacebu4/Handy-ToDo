import React from 'react';
import './App.css';
import { Title } from './components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <Title>Hello</Title>
          <Title isHighlighted>Hello</Title>
        </div>
      </header>
    </div>
  );
}

export default App;
