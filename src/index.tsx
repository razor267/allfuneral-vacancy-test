import React from 'react'
import {createRoot} from 'react-dom/client'
import './styles/globalStyles.scss'
import App from './containers/App'

createRoot(document.getElementById('root') as HTMLDivElement).render(<App/>)