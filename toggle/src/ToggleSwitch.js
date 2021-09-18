import React, {useState} from 'react'
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';



export default function ToggleSwitch() {
  const [checked, setChecked] = useState(false)

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <h1>ToggleSwitch</h1>
      <Switch size="small" checked={checked} onChange={toggleChecked} />
    </div>
  )
}
