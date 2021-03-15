import styled from 'styled-components'

export const CreateEditMeetingPageWrapper = styled.div`
  margin: ${p => p.isCreateEditMeetingErrorMessageVisible ? '50px' : '20px'} 0;
  transition: margin .5s;
`

export const Title = styled.h2`
  font-size: 35px;
  margin-bottom: 30px;
`

export const Form = styled.form``

export const CheckboxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckboxesTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`

export const ConfirmMeetingCreationButtons = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
`

export const ConfirmMeetingCreationButtonWrapper = styled.div`
  width: 100px;
  
  &:first-of-type {
    margin-right: 15px;
  }
`