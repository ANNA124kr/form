import React from 'react';

interface InputProps {
  label: string,
  text: string,
  id: string,
  rows: number,
  cols: number,
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const AppTextArea: React.FC<InputProps> = ({ label, id, rows, text, cols,...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        rows={rows}
        cols={cols}
        {...props}
      >
        {text}
      </textarea>
    </div>
  );
};

export default AppTextArea;