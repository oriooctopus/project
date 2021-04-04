import React from 'react';

type TextInputProps = React.ComponentProps<'input'> & {
  handleChange: (value: string) => void;
  name: string;
  value: string;
};

const TextInput = ({
  handleChange,
  name,
  value,
  ...props
}: TextInputProps) => {
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLTextAreaElement;
    handleChange(value);
  };

  return (
    <input
      name={name}
      onChange={onChange}
      type="text"
      value={value}
      {...props}
    />
  );
};

export default TextInput;
