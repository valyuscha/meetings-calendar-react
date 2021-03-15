import styled from 'styled-components'

export const ModalMessage = styled.p`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  line-height: 150%;
  margin-bottom: 30px;
`

export const MeetingNameWrapper = styled.span`
  display: inline-flex;
  align-items: flex-end;
`

export const MeetingName = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 95%;
  max-width: 290px;
`

export const ConfirmButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ConfirmButtonWrapper = styled.div`
  width: 48%;
`