import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InputType } from '../../utils/enums/ammosType'

interface AmmoState {
  inputs: Record<InputType, number>
  checkedValues: Record<string, string>
}

const initialState: AmmoState = {
  inputs: {
    [InputType.FECHIM]: 0,
    [InputType.TRUE]: 0
  },
  checkedValues: {} // Estado para armazenar os valores das checkboxes
}

const ammoSlice = createSlice({
  name: 'ammo',
  initialState,
  reducers: {
    setInput: (
      state,
      action: PayloadAction<{ type: InputType; value: number }>
    ) => {
      const { type, value } = action.payload
      state.inputs[type] = value
    },
    setCheckedValue: (
      state,
      action: PayloadAction<{ item: string; value: string }>
    ) => {
      const { item, value } = action.payload
      state.checkedValues[item] =
        state.checkedValues[item] === value ? '' : value
    },
    resetCheckedValues: (state) => {
      state.checkedValues = {} // Reseta todas as checkboxes
    }
  }
})

export const { setInput, setCheckedValue, resetCheckedValues } =
  ammoSlice.actions

export const selectInputs = (state: any) => state.ammo.inputs
export const selectCheckedValues = (state: any) => state.ammo.checkedValues

export default ammoSlice.reducer
