import * as S from './style'
import variaveis from '../../styles/variaveis'

const Entrada = () => {
  return (
    <>
      <S.FormContainer>
        <S.FormGroup>
          <S.Label htmlFor="fechim" type="fechim">
            Fechim
          </S.Label>
          <S.Input
            id="fechim"
            borderColor={variaveis.azul}
            color={variaveis.azul}
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor="true" type="true">
            True
          </S.Label>
          <S.Input
            id="truet"
            borderColor={variaveis.vermelho}
            color={variaveis.vermelho}
          />
        </S.FormGroup>
      </S.FormContainer>
      <S.FormContainer>
        <S.BtnStart>Start</S.BtnStart>
      </S.FormContainer>
    </>
  )
}

export default Entrada
