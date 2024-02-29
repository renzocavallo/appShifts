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
            <form onSubmit={handleSubmit}>
                {
                    inputsRegister.map((inp, index) =>
                        <div key={index}>
                            <Input struct={inp} hook={formData}
                                set={newState=>handleStateChange(inp.input.name, newState, setFormData)}
                            />
                        </div>
                    )
                }
            </form>
        </>
    )
}