import React from "react";

export const Input = ({ struct: { input }, hook, set }) => {
    const year = new Date().getFullYear();
    const minDate = new Date().toISOString().split('T')[0];

    const inputProps = {
        type: input.type,
        name: input.name,
        id: input.id,
        value: hook.value,
        onChange: (e) => set(e.target.value),
        ...(input.type === "date" && { min: minDate }),
        ...(input.type === "number" && { min: year - 1, max: year }),
        ...(["password", "text", "email"].includes(input.type) && { placeholder: input.text })
    };

    const inputElement = inputProps.type !== "submit" ? (
        <>
            <label htmlFor={inputProps.id}>{input.text}</label>
            <br />
            <input {...inputProps} />
        </>
    ) : (
        <input type={inputProps.type} value={input.text} />
    );

    return inputElement;
};
