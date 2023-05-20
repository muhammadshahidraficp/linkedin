import React from 'react';

interface AtomicInputProps {
  id:string;
  value: string;
  type: string;
  label?:string;
  error:string;
  backgroundColor?:string;
  disabled?:boolean;
  icon?:any;
  className?:string;
  hideLabel?:boolean;
  textColor?:string;
  labelColor?:string;
  placeholder?:string;
  isRequired?:boolean;
  hideValue:boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AtomicInput: React.FC<AtomicInputProps> = ({ 
    id,
    value="",
    type,
    label="",
    error,
    backgroundColor,
    disabled,
    icon,
    className,
    hideLabel=false,
    hideValue,
    textColor,
    labelColor="",
    placeholder="",
    isRequired=false,
    onChange
}) => {
  let autoComplete: string | undefined;
  if (type === 'email') {
    autoComplete = 'username';
  } else if (type === 'password') {
    autoComplete = 'current-password';
  } else {
    autoComplete = undefined;
  }
  return (
    <input
      className= {`${className}`}
      id={`${id}-field`}
      type={type}
      name= {`${label}`}
      value={value}
      onChange={onChange}
      required={isRequired}
      autoComplete={autoComplete}
    />
  );
};

export default AtomicInput;
