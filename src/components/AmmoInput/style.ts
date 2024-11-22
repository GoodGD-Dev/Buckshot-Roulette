import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { InputType } from '../../utils/enums/ammosType'

// Definindo uma interface para as propriedades customizadas
type InputProps = {
  borderColor?: string
  color?: string
}

type LabelProps = {
  type: InputType.Fechim | InputType.True
}

// Componente genérico de label, recebe a cor via props
export const Label = styled.label<LabelProps>`
  width: 80px;
  text-align: center;
  color: ${({ type }) =>
    type === InputType.Fechim ? variaveis.fechim : variaveis.true};
`

// Componente genérico de input, recebe cor e borda via props
export const Input = styled.input.attrs(() => ({
  type: 'number'
}))<InputProps>`
  width: 80px;
  font-size: 32px;
  padding: 10px 25px;
  border-radius: 5px;
  box-sizing: border-box;
  border: solid 1px ${({ borderColor }) => borderColor || variaveis.fechim};
  color: ${({ color }) => color || variaveis.fechim};
  /* Remove os controles de incremento/decremento */
  appearance: none;
  -webkit-appearance: none; /* Para navegadores WebKit */
  -moz-appearance: textfield; /* Para Firefox */

  &:focus {
    outline: none;
    border-color: ${({ borderColor }) => borderColor || variaveis.fechim};
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
  text-transform: uppercase;
`

//Container
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1vw;
  margin-top: 2vh;
  flex-wrap: wrap;
  text-transform: uppercase;
`

//Inputs/Labels Group
export const FormGroup = styled.div`
  display: flex;
  gap: 1vh;
  flex-direction: column;
  align-items: center;
`
