import React, { FunctionComponent, useEffect, useRef } from 'react';
import '../App.css';
import { annotate } from 'rough-notation';
import { RoughAnnotation } from 'rough-notation/lib/model';
import { yellow, red } from '../colors';

type AnnotateProps = {
  type: 'highlight' | 'crossed-off';
}

const colorPicker = (type: 'highlight' | 'crossed-off') => {
  switch (type) {
    case 'highlight':
      return yellow
  
    case 'crossed-off':
      return red
  }
}

export const Annotate: FunctionComponent<AnnotateProps> = ({children, type}) => {
  const node = useRef<HTMLHeadingElement>(null)
  let annotation: RoughAnnotation;

  useEffect(() => {
      // eslint-disable-next-line 
      annotation = annotate(node.current!, { type, color: colorPicker(type) })
      annotation.show()
  }, [node])

  return (
    <span ref={node} style={{opacity: type === 'crossed-off' ? 0.5 : 1}}>{children}</span>
  );
}
