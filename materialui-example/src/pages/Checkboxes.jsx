import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import React from 'react';

export default function Checkboxes() {
  return (
    <FormGroup col>
      <FormControlLabel label="Sunday" control={<Checkbox />} />
    </FormGroup>
  );
}
