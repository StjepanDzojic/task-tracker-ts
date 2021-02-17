import React from "react";
import { ButtonProps } from "../Models/Interfaces/ButtonProps";

export const Button: React.FC<ButtonProps> = ({ text, onShow }) => {
  return (
    <button className="btn" onClick={onShow}>
      {text}
    </button>
  );
};

export default Button;
