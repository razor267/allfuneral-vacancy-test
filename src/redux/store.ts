import {configureStore} from '@reduxjs/toolkit'
import {Api} from './api'
import authReducer from './reduxSlice'

export const store = configureStore({
    reducer: {
        [Api.reducerPath]: Api.reducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(Api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch