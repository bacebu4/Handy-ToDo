import React, { FunctionComponent } from 'react';
import '../../App.css';

type WrapperProps = {
  tag?: string,
  display?: 'flex' | 'block' | 'inline-block',
  justifyContent?: 'space-between',
  alignItems?: 'center',
  px?: number,
  height?: string,
  bgc?: string,
}


export const Wrapper: FunctionComponent<WrapperProps> = ({ tag = 'div', children, display, justifyContent = 'flex-start', alignItems = 'flex-start', px = 0, height = 'auto', bgc = '#fff' }) => {

  return (
    React.createElement(
      tag,
      {
        style: {
          display,
          justifyContent,
          alignItems,
          paddingLeft: px,
          paddingRight: px,
          height,
          backgroundColor: bgc
        }
      },
      children
    )
  );
}
