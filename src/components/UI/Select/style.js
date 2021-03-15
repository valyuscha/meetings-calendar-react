import styled from 'styled-components'

export const SelectWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 100%;
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
  display: ${({label}) => label ? 'flex' : 'none'};
  align-items: center;
  width: 300px;
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