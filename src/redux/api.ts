import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const Api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://135.181.35.61:2112/', mode: 'cors'}),
    endpoints: (build) => ({
        login: build.query({
            query: user => `auth?user=${user}`,
            transformResponse: (apiResponse, meta) => {
                return { token: meta?.response?.headers.get('Authorization') }
            }
        }),
    })
})

export const {useLoginQuery} = Api