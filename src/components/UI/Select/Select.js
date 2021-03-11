import React from 'react'
import {
  Label, Option, SelectElem, SelectWrapper
} from './style'

const Select = (props) => (
  <SelectWrapper>
    <Label label={props.label}>{props.label}</Label>
    <SelectElem onChange={props.onChange}>
      {props.extraOption ? (
        <Option value={props.extraOption}>
          {props.extraOption}
        </Option>
      ) : null}
      {props.optionsArr.map((option) => (
        <Option key={option.id} value={option.name}>
          {option.name}
        </Option>
      ))}
    </SelectElem>
  </SelectWrapper>
)

export default Select