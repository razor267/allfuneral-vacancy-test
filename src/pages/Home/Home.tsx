import React from 'react'
import {useAuthQuery} from '../../redux/api'
import Spinner from '../../components/Spinner'

const Home = () => {

    const {data, isLoading} = useAuthQuery('greek')
    console.log(data)

    if (isLoading) return <Spinner/>


  /*  fetch('http://135.181.35.61:2112/auth?user=qwerty', {headers: {Origin: "http://135.181.35.61:2112"}}).then((response)=>{
        const token = response.headers.get('Authorization')
        console.log(token)
    })*/


    return (
        <div>
            Home page
        </div>
    )
}

export default Home