import React, { FunctionComponent } from 'react';
import '../App.css';
import { Annotate } from './Annotate';

type TitleProps = {
  isHighlighted?: boolean,
}

export const Title: FunctionComponent<TitleProps> = ({children, isHighlighted}) => {
  return (
    <>
    {isHighlighted ? (<>
      <h1><Annotate type="highlight">{children}</Annotate></h1>
    </>) : (<>
      <h1>{children}</h1>
    </>)}
    </>
  );
}
