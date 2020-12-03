import React, { FunctionComponent, useEffect, useRef } from 'react';
import '../App.css';
import { annotate } from 'rough-notation';
import { RoughAnnotation } from 'rough-notation/lib/model';

type TitleProps = {
  isHighlighted?: boolean,
}

export const Title: FunctionComponent<TitleProps> = ({children, isHighlighted}) => {
  const note = useRef<HTMLHeadingElement>(null)
  let annotation: RoughAnnotation;

  useEffect(() => {
    if (isHighlighted) {
      // eslint-disable-next-line 
      annotation = annotate(note.current!, { type: 'highlight', color: '#FFF176' })
      annotation.show()
    }
  }, [note])

  return (
    <h1 ref={note}>{children}</h1>
  );
}
