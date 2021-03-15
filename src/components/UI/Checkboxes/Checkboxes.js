import React from 'react'
import {
  CheckboxesWrapper,
  CheckboxWrapper,
  Label,
  CheckboxElem,
  ErrorMessage
} from './style'

const Checkboxes = (props) => {
  return (
    <CheckboxesWrapper>
      {props.checkboxesList.map((checkbox) => (
        <CheckboxWrapper key={checkbox.id}>
          <Label htmlFor={checkbox.name}>
            {checkbox.name}
          </Label>
          <CheckboxElem
            type="checkbox"
            id={checkbox.name}
            checked={props.checkedItems.includes(checkbox.name)}
            onChange={props.onChange} />
        </CheckboxWrapper>
      ))}
      <ErrorMessage
        isValid={props.isValid}
        isTouched={props.isTouched}>
        {props.errorMessage}
      </ErrorMessage>
    </CheckboxesWrapper>
  )
}

export default Checkboxes