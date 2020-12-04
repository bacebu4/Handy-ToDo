import React, { FunctionComponent } from 'react';
import '../App.css';
import { Wrapper } from './grid/Wrapper';

type TaskProps = {
}

export const Task: FunctionComponent<TaskProps> = () => {
  return (
    <Wrapper className='Task' tag='p' py={8} style={{cursor: 'pointer'}}>
      Task 1
    </Wrapper>
  );
}
