import React from 'react'

interface Props{
    task: TaskInfo;
    onToggle: (id: number) => void;
}

const ReminderButton: React.FC<Props> = ({ task, onToggle}) => {
    return (
        <button className="btn-reminder" onClick={() => onToggle(task.id)}>Set Reminder</button>
    )
}

export default ReminderButton