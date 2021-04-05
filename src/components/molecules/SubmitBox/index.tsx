import React from 'react';
import clsx from 'clsx';
import Button from 'components/atoms/Button';
import styles from './index.module.scss';

type SubmitBoxProps = {
  canSubmit: boolean;
  children: React.ReactNode;
  className?: string;
  errorMessage: string;
  onSubmit: () => void;
};

const SubmitBox = ({
  canSubmit,
  children,
  className,
  errorMessage,
  onSubmit,
}: SubmitBoxProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      className={clsx(styles.root, className, 'row')}
      onSubmit={handleSubmit}
    >
      <div className="col-md-8">
        {children}
        <div className={styles.submitContainer}>
          <Button disabled={!canSubmit} theme="success" type="submit">
            Submit
          </Button>
          {errorMessage && (
            <span className={styles.error}>{errorMessage}</span>
          )}
        </div>
      </div>
    </form>
  );
};

export default SubmitBox;
