import React from 'react'
import {ModalWrapper, ModalElem} from './style'

const Modal = ({children, show}) => (
  <ModalWrapper show={show}>
    <ModalElem>{children}</ModalElem>
  </ModalWrapper>
)

export default Modal