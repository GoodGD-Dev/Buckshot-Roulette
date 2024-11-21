import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

// Estilos compartilhados para input
const inputStyle = `
  width: 80px;
  font-size: 32px;
  padding: 10px 25px;
  border-radius: 5px;
  box-sizing: border-box;
`

// Definindo uma interface para as propriedades customizadas
interface InputProps {
  borderColor?: string
  color?: string
}

interface LabelProps {
  type: 'fechim' | 'true' // Definindo o tipo que pode ser 'fechim' ou 'true'
}

// Componente genérico de label, recebe a cor via props
export const Label = styled.label<LabelProps>`
  width: 80px;
  text-align: center;
  color: ${({ type }) =>
    type === 'fechim' ? variaveis.azul : variaveis.vermelho};
`

// Componente genérico de input, recebe cor e borda via props
export const Input = styled.input<InputProps>`
  ${inputStyle}
  border: solid 1px ${({ borderColor }) => borderColor || variaveis.azul};
  color: ${({ color }) => color || variaveis.azul};
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
    background-color: ${variaveis.azul};
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
