import React from "react"

export const Input = (props) => {
    const {label, input} = props.struct
    const year = new Date().getFullYear()

    const inputProps = {
        label: label.text,
        type: input.type,
        ...(input.type === "date" && { min: new Date().toISOString().split('T')[0] }),
        ...(input.type === "number" && { min: year - 1, max: year }),
        ...(["password", "text", "email"].includes(input.type) && { placeholder: input.placeholder })
    }

    return (
        <>
            {
                (input.type !== "submit") &&
                <>
                    <label
                        htmlFor={input.id}
                    >
                        {inputProps.label}
                    </label>
                    <br/>
                </>
            }
            <input 
                id={input.id}
                name={input.name}
                value={props.hook.value}
                onChange={(e)=>{props.set(e.target.value)}}
                {...inputProps} 
            />
        </>
    )
}