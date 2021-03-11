import React from 'react'
import {ModalWrapper, ModalElem} from './style'

const Modal = ({children}) => (
  <ModalWrapper>
    <ModalElem>{children}</ModalElem>
  </ModalWrapper>
)

export default Modal