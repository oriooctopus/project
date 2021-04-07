import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

type CardContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const CardContainer = ({
  children,
  className,
}: CardContainerProps) => (
  <div className={clsx(styles.root, className)}>{children}</div>
);

export default CardContainer;
