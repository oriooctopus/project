import React from 'react';
import styles from './index.module.scss';

type TextInputProps = React.ComponentProps<'input'> & {
  handleChange: (value: string) => void;
  isEmail?: boolean;
  name: string;
  withLabel?: boolean;
  value: string;
};

const TextInput = ({
  handleChange,
  name,
  isEmail,
  withLabel,
  value,
  ...props
}: TextInputProps) => {
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLTextAreaElement;
    handleChange(value);
  };
  const input = (
    <input
      className={styles.input}
      name={name}
      onChange={onChange}
      type={isEmail ? 'email' : 'text'}
      value={value}
      {...props}
    />
  );

  return withLabel ? (
    <div>
      <label className={styles.label} htmlFor={name}>
        {name}
      </label>
      {input}
    </div>
  ) : (
    input
  );
};

export default TextInput;
