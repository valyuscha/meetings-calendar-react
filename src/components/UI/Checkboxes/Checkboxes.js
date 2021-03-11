import React from 'react'
import {CheckboxWrapper, Label, CheckboxElem} from './style'

const Checkboxes = (props) => {
  props.checkboxesList.map((checkbox) => (
    <CheckboxWrapper>
      <Label htmlFor={checkbox.name}>
        {checkbox.name}
      </Label>
      <CheckboxElem type="checkbox" id={checkbox.name} />
    </CheckboxWrapper>
  ))
}

export default Checkboxes