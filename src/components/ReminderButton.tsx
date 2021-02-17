import React from 'react'
import { ReminderButtonProps } from '../Models/Interfaces/ReminderButtonProps'

const ReminderButton: React.FC<ReminderButtonProps> = ({ task, onToggle}) => {
    return (
        <button className="btn-reminder" onClick={() => onToggle(task.id)}>Set Reminder</button>
    )
}

export default ReminderButton