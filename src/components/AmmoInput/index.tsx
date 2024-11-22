import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setInput,
  resetCheckedValues,
  selectInputs
} from '../../store/reducers/ammoSlice'
import * as S from './style'
import variaveis from '../../styles/variaveis'
import { InputType } from '../../utils/enums/ammosType'
import ItemList from '../ItemList'

const AmmoInput: React.FC = () => {
  const dispatch = useDispatch()
  const inputs = useSelector(selectInputs)

  const [started, setStarted] = useState(false)
  const [items, setItems] = useState<{ name: string; chance: string }[]>([])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: InputType
  ) => {
    const value = Number(e.target.value)
    dispatch(setInput({ type, value }))
  }

  const handleButtonClick = () => {
    dispatch(resetCheckedValues()) // Reseta as checkboxes

    const totalBalas = inputs[InputType.FECHIM] + inputs[InputType.TRUE]
    const trueBalas = inputs[InputType.TRUE]

    // Calculando a porcentagem de chance de ser uma bala verdadeira
    const chanceDeSerTrue = totalBalas > 0 ? (trueBalas / totalBalas) * 100 : 0

    // Gerando a lista de itens com a probabilidade calculada
    const generatedItems = Array.from({ length: totalBalas }, (_, index) => ({
      name: `Bala ${index + 1}`,
      chance: chanceDeSerTrue.toFixed(2) // Armazenando a chance de ser true com 2 casas decimais
    }))

    setItems(generatedItems)
    setStarted(true)
  }

  return (
    <>
      <S.FormContainer>
        {Object.values(InputType).map((type) => (
          <S.FormGroup key={type}>
            <S.Label htmlFor={type} type={type}>
              {type}
            </S.Label>
            <S.Input
              id={type}
              borderColor={
                variaveis[type.toLowerCase() as keyof typeof variaveis]
              }
              color={variaveis[type.toLowerCase() as keyof typeof variaveis]}
              value={inputs[type]}
              onChange={(e) => handleInputChange(e, type)}
            />
          </S.FormGroup>
        ))}
      </S.FormContainer>

      <S.FormContainer>
        <S.BtnStart onClick={handleButtonClick}>Start</S.BtnStart>
      </S.FormContainer>

      <ItemList items={items} started={started} />
    </>
  )
}

export default AmmoInput
