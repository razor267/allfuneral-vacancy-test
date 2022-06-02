import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Suspense from './Suspense'
import Layout from './Layout'

const Home = React.lazy(()=> import('../pages/Home'))
const Page404 = React.lazy(()=> import('../pages/Page404'))
const OtherPage = React.lazy(()=> import('../pages/OtherPage'))

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Suspense component={<Home/>}/>}/>
                    <Route path='companies' element={<Suspense component={<Home/>}/>}/>
                    <Route path='search' element={<Suspense component={<OtherPage/>}/>}/>
                    <Route path='settings' element={<Suspense component={<OtherPage/>}/>}/>
                    <Route path='chat' element={<Suspense component={<OtherPage/>}/>}/>
                    <Route path='logout' element={<Suspense component={<OtherPage/>}/>}/>
                    <Route path='*' element={<Suspense component={<Page404/>}/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App