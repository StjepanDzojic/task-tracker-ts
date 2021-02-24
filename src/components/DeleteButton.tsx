import React, { HtmlHTMLAttributes } from "react";
import { DeleteButtonProps } from "../Models/Interfaces/DeleteButtonProps";

const DeleteButton: React.FC<DeleteButtonProps> = ({ task, onDelete }) => {
  return (
    <button className="btn-delete" onClick={() => onDelete(task)}>
      Delete
    </button>
  );
};

export default DeleteButton;
