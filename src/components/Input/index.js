import React from 'react'
import { InputContainer } from './styles'

export const Input = ({value, onChange}) => {
  return (
    <InputContainer>
      <input placeholder='digite um Repos aqui' value={value} onChange={onChange}/>
    </InputContainer>
  )
}

export default Input;