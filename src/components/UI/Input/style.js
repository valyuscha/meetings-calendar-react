import styled from 'styled-components'

export const InputBlockWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  //width: 100%;
  max-width: 500px;
  justify-content: space-between;

  &:first-of-type {
    margin-bottom: 12px;
  }
`

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  height: 38px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  width: 295px;
`

export const InputWrapper = styled.div`
  width: 100%;
`

export const InputElem = styled.input`
  display: block;
  height: 38px;
  padding: 0 10px;
  border: 2px solid ${p => !p.isValid && p.isTouched ? '#ff0000' : 'rgba(0, 0, 0, .5)'};
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
`

export const ErrorMessage = styled.p`
  text-align: right;
  font-size: 12px;
  color: #ff0000;
  margin: 5px 5px 0 0;
  opacity: ${p => !p.isValid && p.isTouched ? 1 : 0};
`