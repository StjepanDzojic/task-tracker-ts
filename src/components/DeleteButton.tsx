import React, { HtmlHTMLAttributes } from 'react'


interface Props{
    task: TaskInfo;
    onDelete: ( id: number) => void;
}

const DeleteButton: React.FC<Props> = ({ task, onDelete }) => {
    return (
        <button className="btn-delete" onClick={()=> onDelete(task.id)} >
            Delete
        </button>
    )
}

export default DeleteButton
