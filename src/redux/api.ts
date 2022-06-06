import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const Api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://135.181.35.61:2112/'}),
    endpoints: (build) => ({
        auth: build.query({
            query: user => `auth?user=${user}`,
            transformResponse: (apiResponse, meta) => {
                const token = meta?.response?.headers.get('Authorization')?.substring(7)
                // if (token) localStorage.setItem('token', token)
                return token
            }
        }),
    })
})

export const {useAuthQuery} = Api