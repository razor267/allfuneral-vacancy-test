import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {InitialStateType} from '../types/types'

const initialState: InitialStateType = {
    token: ''
}

const reduxSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        saveToken(state, action: PayloadAction<string>) {
            state.token = action.payload
        }
    }
})

export const {saveToken} = reduxSlice.actions
export default reduxSlice.reducer