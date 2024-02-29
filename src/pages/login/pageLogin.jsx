import React , { useState } from "react"
import { Input } from "../../components/input/input"
import { handleStateChange } from "../../utils/helpers/changeState"
import { loginInputs } from "./structs"

export const PageLogin = () => {
    
    const [formData, setFormData] = useState({legajo:"", password:""})

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                {
                    loginInputs.map((lInp, index)=>
                        <div key={index}>
                            <Input
                                struct={lInp} hook={formData}
                                set={newState=>handleStateChange(lInp.input.name, newState, setFormData)}
                            />
                        </div>
                    )
                }
            </form>
        </>
    )
}