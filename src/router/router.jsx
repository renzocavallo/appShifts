import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PageLogin } from "../pages/login/pageLogin"
import { PageRegister } from "../pages/register/pageRegister"
import { PageConditionOp } from "../pages/conditionOp/pageConditionOp"

export const Router = () => {
    
    return(
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PageLogin/>}/>
                        <Route path="/register" element={<PageRegister/>}/>
                        <Route path="/operator-condition" element={<PageConditionOp/>}/>
                    </Routes>
        </BrowserRouter>
    )
} 