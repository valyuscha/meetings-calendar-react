import React from 'react'
import {ButtonElem} from './style'

const Button = (props) => (
  <ButtonElem
    btnType={props.btnType}
    onClick={props.onClick}>
    {props.children}
  </ButtonElem>
)

export default Button