import React from 'react'
import {useLoginQuery} from '../../redux/api'
import Spinner from '../../components/Spinner'

const Home = () => {

  /*  const {data, isLoading} = useLoginQuery('greek')
    console.log(data)

    if (isLoading) return <Spinner/>*/

    // const res = fetch('http://135.181.35.61:2112/auth?user=qwerty', {method: 'GET', mode:'cors'}).then((res)=> res.headers.get('Authorization'))

   /* fetch("http://135.181.35.61:2112/auth?user=qwerty", {
        "headers": {
            "referrer-policy": "strict-origin-when-cross-origin"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "mode": "cors",
    })
        .then((response) => {
            var token = response.headers.get('Authorization');
            console.log(token);
        })
        .then((responseData) => {
            // console.log(responseData, globalResponse);

        })*/


    fetch('http://135.181.35.61:2112/auth?user=qwerty').then((response)=>{
        const token = response.headers.get('Authorization')
        console.log(response)
    })


/*

    fetch("http://135.181.35.61:2112/companies/12", {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicXdlcnR5IiwiaWF0IjoxNjU0MzY0NjA5LCJleHAiOjE2NTQ5Njk0MDl9.iH3DVcutm5Mm4qjOyT7ylHKsiGM4ZSkTaRDZl8b_uys",
            "Content-Type": "application/json"
        }
    }).then(res => {
        debugger
    })
*/


    return (
        <div>
            Home page
        </div>
    )
}

export default Home