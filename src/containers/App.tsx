import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Suspense from './Suspense'
import Layout from './Layout'
import {Provider} from 'react-redux'
import {store} from '../redux/store'

const Home = React.lazy(() => import('../pages/Home'))
const Page404 = React.lazy(() => import('../pages/Page404'))
const OtherPage = React.lazy(() => import('../pages/OtherPage'))

function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    )
}

export default App