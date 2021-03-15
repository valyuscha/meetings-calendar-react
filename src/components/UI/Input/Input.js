import React from 'react'
import {
  InputBlockWrapper,
  Label,
  InputWrapper,
  InputElem,
  ErrorMessage
} from './style'

const Input = (props) => (
  <InputBlockWrapper>
    <Label>{props.label}</Label>
    <InputWrapper>
      <InputElem
        type={props.type}
        value={props.value}
        isValid={props.isValid}
        isTouched={props.isTouched}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        onChange={props.onChange} />
      <ErrorMessage
        isValid={props.isValid}
        isTouched={props.isTouched}>
        {props.errorMessage}
      </ErrorMessage>
    </InputWrapper>
  </InputBlockWrapper>
)

export default Input