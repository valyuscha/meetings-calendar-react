import styled from 'styled-components'

export const CreateEditMeetingErrorMessageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: #ffe2d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  z-index: 9999;
  transform: ${({show}) => show ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform .5s;
`

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ErrorIcon = styled.img`
  width: 15px;
  height: 15px;
`

export const Message = styled.p`
  font-size: 14px;
  color: #ff0000;
  margin-left: 10px;
`

export const HideMessageButton = styled.button`
  background: none;
  border: none;
  width: 15px;
  height: 15px;
  margin-left: 10px;
`

export const HideMessageIcon = styled.img`
  width: 15px;
  height: 15px;
`