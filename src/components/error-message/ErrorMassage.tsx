import React from "react";

interface MessageProps {
  message: string;
}

const ErrorMessage: React.FC<MessageProps> = ({ message }) => {
  return (
    <>
      <p style={{color:'red'}} >{message}</p>
    </>
  );
};

export default ErrorMessage;