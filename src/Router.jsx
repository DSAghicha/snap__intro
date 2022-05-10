import { BrowserRouter, Route, Routes } from "react-router-dom"

import './sass/Reset.sass'
import { Home } from './pages'

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="*" element={<h1>NF</h1>} />
            </Routes>
        </BrowserRouter>
    )
}