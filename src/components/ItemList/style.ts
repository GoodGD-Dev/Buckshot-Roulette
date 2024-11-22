import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type InputProps = {
  checkColor?: string
  content?: string
}

export const ListBullets = styled.ul`
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  border: dotted 1px ${variaveis.verde};
  height: 75%;
`

export const Bullets = styled.li`
  margin-bottom: 1rem;
`

export const CheckBullets = styled.input.attrs(() => ({
  type: 'checkbox'
}))<InputProps>`
  margin-left: 2rem;
  margin-right: 0.5rem;
  border: solid 1px ${variaveis.verde};
  width: 1.5rem;
  height: 1.5rem;
  appearance: none;

  background-color: white;
  border-radius: 4px;
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: ${({ checkColor }) => checkColor || variaveis.verde};
  }

  /* Adiciona o "visto" personalizado */
  &:checked::before {
    content: ${({ content }) => content || 'X'};
    font-weight: bold;
    position: absolute;
    top: 2px;
    left: 4px;
    color: white;
    font-size: 16px;
  }
`
