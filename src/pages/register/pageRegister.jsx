import React , { useState } from "react"
import { inputsRegister } from "./structs"
import { Input } from "../../components/input/input"
import { handleStateChange } from "../../utils/helpers/changeState"

export const PageRegister = () => {
    
    const [formData, setFormData] = useState({leg:"", name:"", lastname:"", pass:""})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return(
        <>
            <form onSubmit={handleSubmit} autoComplete="off">
                {
                    inputsRegister.map((inp, index) =>
                        <Input struct={inp} hook={formData} key={index}
                            set={newState=>handleStateChange(inp.input.name, newState, setFormData)}
                        />
                    )
                }
            </form>
        </>
    )
}