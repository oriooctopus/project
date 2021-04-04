import React from 'react';

type TextareaProps = React.ComponentProps<'textarea'> & {
  className?: string;
  handleChange: (value: string) => void;
  name: string;
  value: string;
};

const Textarea = ({
  className,
  handleChange,
  name,
  value,
  ...props
}: TextareaProps) => {
  const onChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const { value } = e.target as HTMLTextAreaElement;
    handleChange(value);
  };

  return (
    <textarea
      className={className}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

export default Textarea;
