import React, {useState} from 'react'
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    // color: (props) => props.color,
  },
  switchBase: {
    height: '16px',
    width: '32px',
    backgroundColor: 'red',
  }
});


export default function ToggleSwitch() {
  const [checked, setChecked] = useState(false)

  const classes = useStyles()

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <h1>ToggleSwitch</h1>
      <Switch size="small" checked={checked} onChange={toggleChecked} classes={{root: classes.root, switchBase: classes.switchBase}}/>
    </div>
  )
}

// backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent('#fff')}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`