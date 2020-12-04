import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Wrapper } from './components/grid/Wrapper';
import { DayCard } from './components/DayCard';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Wrapper display="flex">
        <Title>Hello</Title>
        <Title ml={32}>Hello but longer</Title>
      </Wrapper> */}
      <Wrapper px={64}><DayCard /></Wrapper>
    </div>
  );
}

export default App;
