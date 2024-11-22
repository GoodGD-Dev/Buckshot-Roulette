import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCheckedValues,
  setCheckedValue
} from '../../store/reducers/ammoSlice'
import * as S from './style'
import variaveis from '../../styles/variaveis'
import { InputType } from '../../utils/enums/ammosType'

type ItemListProps = {
  items: { name: string; chance: string }[]
  started: boolean
}

const ItemList: React.FC<ItemListProps> = ({ items, started }) => {
  const dispatch = useDispatch()
  const checkedValues = useSelector(selectCheckedValues)

  if (!started) {
    return null
  }

  const handleCheckboxChange = (item: string, value: string) => {
    dispatch(setCheckedValue({ item, value }))
  }

  return (
    <S.ListBullets>
      {items.map((item, index) => (
        <S.Bullets key={index}>
          {item.name} - {item.chance}% de chance de ser verdadeira
          <Checkbox
            id={InputType.TRUE + item.name}
            name={InputType.TRUE + item.name}
            value={InputType.TRUE}
            color={variaveis.true}
            checked={checkedValues[item.name] === InputType.TRUE}
            onChange={() => handleCheckboxChange(item.name, InputType.TRUE)}
          />
          <Checkbox
            id={InputType.FECHIM + item.name}
            name={InputType.FECHIM + item.name}
            value={InputType.FECHIM}
            color={variaveis.fechim}
            checked={checkedValues[item.name] === InputType.FECHIM}
            onChange={() => handleCheckboxChange(item.name, InputType.FECHIM)}
          />
        </S.Bullets>
      ))}
    </S.ListBullets>
  )
}

const Checkbox: React.FC<{
  id: string
  name: string
  value: string
  checked: boolean
  color: string
  onChange: () => void
}> = ({ id, name, value, checked, color, onChange }) => (
  <>
    <S.CheckBullets
      id={id}
      name={name}
      value={value}
      checkColor={color}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={id}>{value}</label>
  </>
)

export default ItemList
