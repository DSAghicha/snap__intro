import React from 'react'
import reactDom from 'react-dom/client'
import Router from './Router'

const root = reactDom.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
)
