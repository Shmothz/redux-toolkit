import { configureStore } from '@reduxjs/toolkit'
import { oneSlice } from './slices'

const store = configureStore({
 reducer: {
  one: oneSlice.reducer,
 },
})
export type IStore = ReturnType<typeof store.getState>

export default store
