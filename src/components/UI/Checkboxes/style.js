import styled from 'styled-components'

export const CheckboxesWrapper = styled.div`
  width: 170px;
`

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`

export const CheckboxElem = styled.input`
  margin-bottom: 10px;
`

export const ErrorMessage = styled.p`
  text-align: right;
  font-size: 12px;
  color: #ff0000;
  margin-top: 20px;
  opacity: ${p => !p.isValid && p.isTouched ? 1 : 0};
`