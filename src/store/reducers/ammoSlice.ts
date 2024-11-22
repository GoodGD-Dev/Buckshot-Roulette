import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InputType } from '../../utils/enums/ammosType'

interface AmmoState {
  inputs: Record<InputType, number>
  items: string[]
}

const initialState: AmmoState = {
  inputs: {
    [InputType.FECHIM]: 0,
    [InputType.TRUE]: 0
  },
  items: []
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
    setItems: (state, action: PayloadAction<string[]>) => {
      state.items = action.payload
    }
  }
})

export const { setInput, setItems } = ammoSlice.actions

export default ammoSlice.reducer
