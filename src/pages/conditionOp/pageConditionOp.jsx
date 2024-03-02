import React , { useState } from "react"
import { Input, Select} from "../conditionOp/components"
import { optionsSelects, contidionOpInputs } from "./structs"
import { handleStateChange } from "../../utils/helpers/changeState"

export const PageConditionOp = () => {

    const [formData, setFormData] = useState({turn:"", dayT:"", monthR:"", year:"", date:"" })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                {
                    optionsSelects.map((opt, index) =>
                        <Select key={index} struct={opt} hook={formData} text={opt.text}
                            set={newState=>handleStateChange(opt.name, newState, setFormData)}
                        />
                    )
                }
                {
                    contidionOpInputs.map((opInput, index) => 
                        <Input key={index} struct={opInput} hook={formData}
                            set={newState=>handleStateChange(opInput.input.name, newState, setFormData)}
                        />
                    )
                }
            </form>
        </>
    )
}