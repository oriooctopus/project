import React from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';

type TextareaProps = React.ComponentProps<'textarea'> & {
  className?: string;
  handleChange: (value: string) => void;
  name: string;
  value: string;
  withLabel?: boolean;
};

const Textarea = ({
  className,
  handleChange,
  name,
  value,
  withLabel,
  ...props
}: TextareaProps) => {
  const onChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const { value } = e.target as HTMLTextAreaElement;
    handleChange(value);
  };

  const textarea = (
    <textarea
      className={clsx(styles.textarea, className)}
      name={name}
      onChange={onChange}
      value={value}
    />
  );

  return withLabel ? (
    <div>
      <label className={styles.label} htmlFor={name}>
        {name}
      </label>
      {textarea}
    </div>
  ) : (
    textarea
  );
};

export default Textarea;
