import React, { useState } from 'react';
import './App.css';

function Checkbox({ type = 'checkbox', name, checked = false, onChange }) {
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
}

function CheckboxExample() {
  const [checkedDays, setCheckedDays] = useState({});

  function handleChange(event) {
    const { name, checked } = event.target;
    setCheckedDays({
      ...checkedDays,
      [name]: checked,
    });
  }

  const checkboxes = [
    { name: 'Sunday', key: 'checkbox-1', label: 'Sunday' },
    { name: 'Monday', key: 'checkbox-2', label: 'Monday' },
    { name: 'Tuesday', key: 'checkbox-3', label: 'Tuesday' },
    { name: 'Wednesday', key: 'checkbox-4', label: 'Wednesday' },
    { name: 'Thursday', key: 'checkbox-5', label: 'Thursday' },
    { name: 'Friday', key: 'checkbox-6', label: 'Friday' },
    { name: 'Saturday', key: 'checkbox-7', label: 'Saturday' },
  ];

  return (
    <div>
      <label>
        <h1>Multiple Checkboxes</h1>
      </label>
      <br />
      {checkboxes.map((check) => (
        <>
          <label key={check.key}>{check.name}</label>
          <Checkbox
            name={check.name}
            checked={checkedDays[check.name]}
            onChange={handleChange}
          />
          <br />
        </>
      ))}
    </div>
  );
}

export default CheckboxExample;
