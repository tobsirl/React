import {FormGroup} from '@material-ui/core'
import React from 'react'
import Check from './Check'

export default function Checkboxes(props) {
  return (
    <FormGroup col>
      {Object.entries(props.daysOfTheWeek).map(([day, checked]) => (
        <div key={day}>
          <Check
            day={day}
            checked={checked}
            handleChange={props.handleChange}
          />
        </div>
      ))}
    </FormGroup>
  )
}
