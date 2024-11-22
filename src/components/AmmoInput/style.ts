import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { InputType } from '../../utils/enums/ammosType'

// Definindo uma interface para as propriedades customizadas
type InputProps = {
  borderColor?: string
  color?: string
}

type LabelProps = {
  type: InputType.FECHIM | InputType.TRUE
}

// Componente genérico de label, recebe a cor via props
export const Label = styled.label<LabelProps>`
  width: 80px;
  text-align: center;
  color: ${({ type }) =>
    type === InputType.FECHIM ? variaveis.fechim : variaveis.true};
`

// Componente genérico de input, recebe cor e borda via props
export const Input = styled.input.attrs(() => ({
  type: 'number',
  min: 0, // Valor mínimo permitido
  max: 9,
  step: 1
}))<InputProps>`
  width: 100px;
  font-size: 32px;
  text-align: center;
  padding: 10px 5px;
  border-radius: 5px;
  box-sizing: border-box;
  border: solid 1px ${({ borderColor }) => borderColor || variaveis.verde};
  color: ${({ color }) => color || variaveis.fechim};

  &:focus {
    outline: none;
    border-color: ${({ borderColor }) => borderColor || variaveis.verde};
  }
`

// Botão de start
export const BtnStart = styled.button`
  padding: 15px 35px;
  color: ${variaveis.verde};
  border: solid 1px ${variaveis.verde};
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font &:hover {
    background-color: ${variaveis.fechim};
  }
  text-align: center;
`

//Container
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1vw;
  margin-top: 2vh;
  flex-wrap: wrap;
`

//Inputs/Labels Group
export const FormGroup = styled.div`
  display: flex;
  gap: 1vh;
  flex-direction: column;
  align-items: center;
`
