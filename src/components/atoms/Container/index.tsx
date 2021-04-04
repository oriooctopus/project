import React from 'react';
import clsx from 'clsx';

export type ContainerProps = {
  color?: string;
  children: React.ReactNode;
  className?: string;
  isFluid?: boolean;
};

const Container = ({ children, className, color, isFluid }: ContainerProps) => {
  const style = { backgroundColor: color } as React.CSSProperties;

  return (
    <div
      className={clsx(className, {
        container: !isFluid,
        'container-fluid': isFluid,
      })}
      style={style}
    >
      {children}
    </div>
  );
};

export default Container;
