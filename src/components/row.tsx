import React from 'react';
import { CProp } from './container';

function Row({ fluid, children }: CProp) {
  return <div className={`row${fluid ? '-fluid' : ''}`}>{children}</div>;
}

export default Row;
