import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

type SubmitButtonProps = {
  children: string;
  className?: string;
  disabled: boolean;
};

const SubmitButton = ({
  children,
  className,
  disabled,
}: SubmitButtonProps) => {
  return (
    <button
      className={clsx(styles.root, className)}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
