import React, { FunctionComponent, useEffect, useRef } from 'react';
import '../App.css';
import { annotate } from 'rough-notation';
import { RoughAnnotation } from 'rough-notation/lib/model';

type AnnotateProps = {
  type: 'highlight' | 'crossed-off';
}

const colorPicker = (type: 'highlight' | 'crossed-off') => {
  switch (type) {
    case 'highlight':
      return '#FFF176'
  
    case 'crossed-off':
      return '#F57F16'
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
