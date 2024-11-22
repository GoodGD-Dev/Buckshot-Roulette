import React, { useState } from 'react'
import { InputType } from '../../utils/enums/ammosType'
import * as S from './style'
import variaveis from '../../styles/variaveis'

type ItemListProps = {
  inputs: { [key in InputType]: number }
  started: boolean
}

const ItemList: React.FC<ItemListProps> = ({ inputs, started }) => {
  const [checkedValues, setCheckedValues] = useState<{ [key: string]: string }>(
    {}
  )

  if (!started) {
    return null // Não renderiza nada até o botão "Start" ser clicado
  }

  // Calculando a soma dos valores dos inputs
  const sum = Math.min(inputs[InputType.FECHIM] + inputs[InputType.TRUE], 14) // Limita a soma a 14

  // Gerando os itens com base na soma
  const items = Array.from({ length: sum }, (_, index) => `Bala ${index + 1}`)

  // Função para manipular a seleção dos checkboxes
  const handleCheckboxChange = (item: string, value: string) => {
    setCheckedValues((prevState) => ({
      ...prevState,
      [item]: prevState[item] === value ? '' : value
    }))
  }

  return (
    <S.ListBullets>
      {items.map((item, index) => (
        <S.Bullets key={index}>
          {item}
          <S.CheckBullets
            id={InputType.TRUE + index}
            name={InputType.TRUE + index}
            value={InputType.TRUE}
            checkColor={variaveis.true}
            checked={checkedValues[item] === InputType.TRUE}
            onChange={() => handleCheckboxChange(item, InputType.TRUE)}
          />
          <label htmlFor={InputType.TRUE + index}>{InputType.TRUE}</label>
          <S.CheckBullets
            id={InputType.FECHIM + index}
            name={InputType.FECHIM + index}
            value={InputType.FECHIM}
            checkColor={variaveis.fechim}
            checked={checkedValues[item] === InputType.FECHIM}
            onChange={() => handleCheckboxChange(item, InputType.FECHIM)}
          />
          <label htmlFor={InputType.FECHIM + index}>{InputType.FECHIM}</label>
        </S.Bullets>
      ))}
    </S.ListBullets>
  )
}

export default ItemList
