import React from 'react'

interface Props{
    text: string;
}

export const Button: React.FC<Props> = ({ text }) => {
    return (
    <button className="btn" >{text}</button>
    )
}

export default Button
