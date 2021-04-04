import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

type ButtonProps = React.ComponentProps<'button'> & {
  children: string;
  className?: string;
  disabled?: boolean;
  theme: 'success' | 'danger' | 'primary';
};

const Button = ({
  children,
  className,
  disabled,
  theme,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.root, styles[theme], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
