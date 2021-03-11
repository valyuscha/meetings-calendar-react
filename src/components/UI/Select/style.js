import styled from 'styled-components'

export const SelectWrapper = styled.div``

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  height: 38px;
  margin-right: 10px;
  display: ${({label}) => label ? 'flex' : 'none'};
  align-items: center;
`

export const SelectElem = styled.select`
  height: 38px;
  width: 100%;
  border: 2px solid rgba(0, 0, 0, .5);
  border-radius: 5px;
  padding-left: 5px;
  font-size: 16px;
`

export const Option = styled.option``