import React, { FunctionComponent } from 'react';
import '../App.css';
import { Annotate } from './Annotate';

type TitleProps = {
  mt?: number, 
  ml?: number, 
}

export const Title: FunctionComponent<TitleProps> = ({children, mt, ml}) => {
  return (
    <>
    <h1 style={{
      marginTop: mt,
      marginLeft: ml
    }}><Annotate type="highlight">{children}</Annotate></h1>
    </>
  );
}
