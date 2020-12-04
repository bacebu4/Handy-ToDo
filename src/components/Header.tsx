import React, { FunctionComponent } from 'react';
import '../App.css';
import { Annotate } from './Annotate';
import { Wrapper } from './grid/Wrapper';

export const Header: FunctionComponent = () => {
  return (
    <Wrapper tag='header' display='flex' justifyContent='space-between' alignItems='center' px={64} height='64px' >
      <Annotate type='highlight'>
        <h2>Handy ToDo</h2>
      </Annotate>
      <span style={{fontWeight: 'bold', color: "#0D47A1", cursor: "pointer"}}>Login</span>
    </Wrapper>
  );
}

