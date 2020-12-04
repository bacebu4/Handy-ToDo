import React, { FunctionComponent } from 'react';
import '../../App.css';

type WrapperProps = {
  tag?: string,
  display?: 'flex' | 'block' | 'inline-block',
  justifyContent?: 'space-between',
  alignItems?: 'center',
  px?: number,
  py?: number,
  height?: string,
  bgc?: string,
  flexDirection?: 'column',
  style?: any, // TODO
  mt?: number,
  className?: string,
}


export const Wrapper: FunctionComponent<WrapperProps> = ({ tag = 'div', children, display, justifyContent = 'flex-start', alignItems = 'flex-start', px = 0, py = 0, height = 'auto', bgc = '#fff', flexDirection = 'row', style = {}, mt = 0, className = 'noop' }) => {

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
          paddingTop: py,
          paddingBottom: py,
          height,
          backgroundColor: bgc,
          flexDirection,
          ...style,
          marginTop: mt,
        },
        className
      },
      children
    )
  );
}
