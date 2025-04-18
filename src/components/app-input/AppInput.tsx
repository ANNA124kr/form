import React from 'react';

interface InputProps {
  label: string,
  id: string
  name: string,
  type: string,
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AppInput: React.FC<InputProps> = ({ label, id, name, type, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} {...props} />
    </div>
  );
};

export default AppInput;