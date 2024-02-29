import React from "react"

export const Select = ({options, hook, set}) => {
    return(
        <>
            <select
                value={hook.value}
                onChange={(e)=>{set(e.target.value)}}
            >
                {options.map((option, index) => 
                        <option 
                            key={index}
                            value={option.value}
                        >   
                            {option.text}
                        </option>
                    )
                }
            </select>
        </>
    )
}