import React, { useState } from "react";
import { AddTaskProps } from "../Models/Interfaces/AddTaskProps";

const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
  const [text, setText] = useState<string | undefined>(undefined);
  const [day, setDay] = useState<string | undefined>(undefined);
  const [reminder, setReminder] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string | undefined>(undefined);
  const [errorDay, setErrorDay] = useState<string | undefined>(undefined);
  const [errorLength, setErrorLength] = useState<string | undefined>(undefined);

  const onClickText = () => {
    setErrorLength(undefined);
    setErrorText(undefined);
  };

  const onClickDay = () => {
    setErrorDay(undefined);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text) {
      setErrorText("Task can't be empty");
    } else if (text.length < 5) {
      setErrorLength("Task must contain 10 characters!");
    }

    if (!day) {
      setErrorDay("Day can't be empty!");
    }

    if (!text || !day || text.length < 10) {
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onClick={onClickText}
        />
        <small>{errorText}</small>
        <small>{errorLength} </small>
      </div>
      <div className="form-control">
        <label>Day</label>
        <input
          type="text"
          placeholder="Add Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          onClick={onClickDay}
        />
        <small>{errorDay}</small>
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
