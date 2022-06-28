import React, { ReactNode } from 'react';

export interface CProp {
  fluid?: boolean;
  children: ReactNode;
}

function Container({ fluid, children }: CProp) {
  return <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>;
}

Container.defaultProps = {
  fluid: undefined,
};

export default Container;
