import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Title } from './components/Title';
import { Wrapper } from './components/grid/Wrapper';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Wrapper display="flex">
        <Title>Hello</Title>
        <Title ml={32}>Hello but longer</Title>
      </Wrapper> */}
    </div>
  );
}

export default App;
