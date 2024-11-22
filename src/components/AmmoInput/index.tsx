import { useState } from 'react'
import * as S from './style'
import variaveis from '../../styles/variaveis'
import { InputType } from '../../utils/enums/ammosType'

const AmmoInput = () => {
  // Estados para armazenar os valores dos inputs
  const [inputFechim, setInputFechim] = useState<number>(0)
  const [inputTrue, setInputTrue] = useState<number>(0)

  // Estado para armazenar os itens gerados
  const [items, setItems] = useState<string[]>([])

  // Função para atualizar o valor do input
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setInput: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setInput(Number(e.target.value))
  }

  // Função chamada ao clicar no botão
  const handleButtonClick = () => {
    const sum = inputFechim + inputTrue // Soma dos dois valores
    const newItems = Array.from(
      { length: sum },
      (_, index) => `Test ${index + 1}`
    ) // Criação dos itens "Test 1", "Test 2", etc.
    setItems(newItems) // Atualiza o estado com a nova lista
  }

  return (
    <>
      <S.FormContainer>
        <S.FormGroup>
          <S.Label htmlFor={InputType.Fechim} type={InputType.Fechim}>
            {InputType.Fechim}
          </S.Label>
          <S.Input
            id={InputType.Fechim}
            borderColor={variaveis.fechim}
            color={variaveis.fechim}
            value={inputFechim} // Valor do input
            onChange={(e) => handleInputChange(e, setInputFechim)} // Atualiza o estado para Fechim
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor={InputType.True} type={InputType.True}>
            {InputType.True}
          </S.Label>
          <S.Input
            id={InputType.True}
            borderColor={variaveis.true}
            color={variaveis.true}
            value={inputTrue} // Valor do input
            onChange={(e) => handleInputChange(e, setInputTrue)} // Atualiza o estado para True
          />
        </S.FormGroup>
      </S.FormContainer>

      <S.FormContainer>
        <S.BtnStart onClick={handleButtonClick}>Start</S.BtnStart>
      </S.FormContainer>

      {/* Renderizando a lista de itens gerados */}
      <ul>
        {items.length > 0 &&
          items.map((item, index) => (
            <li key={index}>{item}</li> // Mapeia os itens gerados
          ))}
      </ul>
    </>
  )
}

export default AmmoInput
