import React, { FunctionComponent } from 'react';
import '../App.css';
import { Annotate } from './Annotate';

type TitleProps = {
  mt?: number, 
  ml?: number,
  isToday?: boolean 
}

export const Title: FunctionComponent<TitleProps> = ({children, mt, ml, isToday = false}) => {
  return (
    <>
    <h1 style={{
      marginTop: mt,
      marginLeft: ml,
      marginBottom: 16,
    }}><Annotate type={isToday ? "highlight" : "none"}>{children}</Annotate></h1>
    </>
  );
}
