import React from 'react'
import {useAuthQuery} from '../../redux/api'
import Spinner from '../../components/Spinner'
import {useAppDispatch} from '../../hooks/hooks'
import {saveToken} from '../../redux/reduxSlice'

const Home = () => {

    const dispatch = useAppDispatch()

    const {data, isLoading} = useAuthQuery('greek')
    if (data) dispatch(saveToken(data))

    if (isLoading) return <Spinner/>

    return (
        <div>
            Home page
        </div>
    )
}

export default Home