import styled, { createGlobalStyle } from 'styled-components'
import variaveis from '../styles/variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    background-color: ${variaveis.background};
    color: ${variaveis.verde};
    text-transform: uppercase;
    font-weight: bold;
  }



`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  border: dotted 1px ${variaveis.verde};
  padding: 10px;
  margin-top: 10px;
  height: 90vh;
`

export default EstiloGlobal
