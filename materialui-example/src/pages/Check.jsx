import { FormControlLabel, Checkbox } from '@material-ui/core'

export default function Check({ day, checked, handleChange }) {
  return (
    <>
      <FormControlLabel
        label={day}
        control={
          <Checkbox name={day} checked={checked} onChange={handleChange} />
        }
      />
    </>
  )
}
