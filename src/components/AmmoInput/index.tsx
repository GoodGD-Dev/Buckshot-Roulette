import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './style'
import variaveis from '../../styles/variaveis'

import { InputType } from '../../utils/enums/ammosType'
import { setInput } from '../../store/reducers/ammoSlice'
import ItemList from '../ItemList'

const AmmoInput: React.FC = () => {
  const dispatch = useDispatch()
  const { inputs } = useSelector((state: any) => state.ammo)

  // Estado para controlar quando o botão foi clicado
  const [started, setStarted] = useState(false)
  const [forceUpdate, setForceUpdate] = useState(0) // Estado para forçar atualização

  // Função para lidar com a mudança dos inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: InputType
  ) => {
    const value = Number(e.target.value)
    dispatch(setInput({ type, value }))
  }

  // Função chamada ao clicar no botão "Start"
  const handleButtonClick = () => {
    if (!started) {
      setStarted(true) // Ativa a lógica pela primeira vez
    } else {
      setForceUpdate((prev) => prev + 1) // Força a atualização dos cálculos e dos itens
    }
  }

  return (
    <>
      <S.FormContainer>
        <S.FormGroup key={InputType.FECHIM}>
          <S.Label htmlFor={InputType.FECHIM} type={InputType.FECHIM}>
            {InputType.FECHIM}
          </S.Label>
          <S.Input
            id={InputType.FECHIM}
            borderColor={variaveis.fechim}
            color={variaveis.fechim}
            value={inputs[InputType.FECHIM]}
            onChange={(e) => handleInputChange(e, InputType.FECHIM)}
          />
        </S.FormGroup>

        <S.FormGroup key={InputType.TRUE}>
          <S.Label htmlFor={InputType.TRUE} type={InputType.TRUE}>
            {InputType.TRUE}
          </S.Label>
          <S.Input
            id={InputType.TRUE}
            borderColor={variaveis.true}
            color={variaveis.true}
            value={inputs[InputType.TRUE]}
            onChange={(e) => handleInputChange(e, InputType.TRUE)}
          />
        </S.FormGroup>
      </S.FormContainer>

      <S.FormContainer>
        <S.BtnStart onClick={handleButtonClick}>Start</S.BtnStart>
      </S.FormContainer>

      <ItemList inputs={inputs} started={started} forceUpdate={forceUpdate} />
    </>
  )
}

export default AmmoInput
