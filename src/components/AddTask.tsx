import React, { useState } from "react";
import { AddTaskProps } from "../Models/Interfaces/AddTaskProps";

const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
  const [text, setText] = useState<string | undefined>(undefined);
  const [day, setDay] = useState<string | undefined>(undefined);
  const [reminder, setReminder] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text || !day) {
      alert("All the empty spaces must be filled out, please fill them out!");
      return;
    }

    if (text.length < 10) {
      alert("The task must contain at least 10 characters!");
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
        />
      </div>
      <div className="form-control">
        <label>Day</label>
        <input
          type="text"
          placeholder="Add Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
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
