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
      <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">Login</a>
    </Wrapper>
  );
}

