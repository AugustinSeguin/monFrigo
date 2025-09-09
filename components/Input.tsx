import React from "react";

type InputProps = {
  text: string;
};

const Input: React.FC<InputProps> = ({ text }) => {
  return <input type="text" value={text} readOnly />;
};

export default Input;
