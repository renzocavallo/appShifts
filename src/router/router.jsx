import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PageLogin } from "../pages/login/pageLogin"
import { PageRegister } from "../pages/register/pageRegister"

export const Router = () => {
    
    return(
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PageLogin/>}/>
                        <Route path="/register" element={<PageRegister/>}/>
                    </Routes>
        </BrowserRouter>
    )
} 