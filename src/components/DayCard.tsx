import React, { FunctionComponent } from 'react';
import '../App.css';
import { Wrapper } from './grid/Wrapper';
import { Task } from './Task';
import { Title } from './Title';

export const DayCard: FunctionComponent = () => {
  return (
    <Wrapper mt={32} tag='section' style={{maxWidth: '260px'}}>
      <Title isToday>Today, December 4th</Title>
      <Task></Task>
      <Task></Task>
      <Task></Task>
    </Wrapper>
  );
}
