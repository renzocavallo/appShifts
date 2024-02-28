import React , { useState }from "react"
import { Input } from "../../components/input/input"
import { loginInputs } from "./structs"

export const PageLogin = () => {
    const [formData, setFormData] = useState({legajo:"", password:""})

    const handleStateChange = (name, value) =>{
        setFormData( prevData => ({
            ...prevData,
            [name]:value
            }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                {
                    loginInputs.map((lAndI, index)=>
                        <div
                            key={index}
                        >
                            <Input
                                struct={lAndI}
                                hook={formData}
                                set={newState=>handleStateChange(lAndI.input.name, newState)}
                            />
                        </div>
                    )
                }
            </form>
        </>
    )
}