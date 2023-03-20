import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interface State {
//     data: string[]
// }

// const addData: CaseReducer<State, PayloadAction<string>> = (state,action) => {
//     state.data.push(action.payload)
// }

export const oneSlice = createSlice({
 name: 'oneSlice',
 initialState: {
  data: [] as string[],
 },
 reducers: {
  addData(state, action: PayloadAction<string>) {
   console.log(state, action)
   state.data.push(action.payload)
  },
 },
})

export const { addData } = oneSlice.actions
