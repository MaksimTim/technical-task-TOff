import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FilterState {
    value: number
}

const initialState: FilterState = {
    value: 0,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        increment: (state) => {

            state.value += 1
        },
    },
})

export const { increment,} = filterSlice.actions

export default filterSlice.reducer