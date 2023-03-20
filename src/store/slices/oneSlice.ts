import {createSlice, CaseReducer, PayloadAction} from "@reduxjs/toolkit";

interface State {
    data: string[]
}

const addData: CaseReducer<State, PayloadAction<string>> = (state,action) => {
    console.log(state, action)
    state.data.push(action.payload)
}

export const oneSlice = createSlice({
    name: 'oneSlice',
    initialState: {
        data: [] as string[],
    },
    reducers: {
        addData,
    }
})
