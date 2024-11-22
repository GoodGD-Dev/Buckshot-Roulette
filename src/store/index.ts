import { configureStore } from '@reduxjs/toolkit'
import ammoReducer from './reducers/ammoSlice'

const store = configureStore({
  reducer: {
    ammo: ammoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
