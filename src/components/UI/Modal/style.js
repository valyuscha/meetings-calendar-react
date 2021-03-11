import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .4);
`

export const ModalElem = styled.div`
  width: 80%;
  max-width: 350px;
  background: #e9e9e9;
  border: 3px solid rgba(0, 0, 0, .7);
  border-radius: 10px;
  padding: 15px;
  position: fixed;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  box-sizing: border-box;
`