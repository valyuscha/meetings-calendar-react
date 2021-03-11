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
        type="text"
        id={props.id}
        placeholder={props.placeholder}
      />
      <ErrorMessage id={props.errorMessageId}>
        {props.errorMessage}
      </ErrorMessage>
    </InputWrapper>
  </InputBlockWrapper>
)

export default Input