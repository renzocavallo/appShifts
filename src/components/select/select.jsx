import React from "react"

export const Select = ({ struct:{options}, hook, set, text }) => {
  const selectProps = {
    value: hook.value,
    onChange: (e) => {set(parseInt(e.target.value))}
  }

  const optionElements = options.map((opt, index) => (
    <option key={index} value={opt.value}>
      {opt.text}
    </option>
  ))

  return (
    <>
      <label>{text}</label>
      <br/>
      <select {...selectProps}>
        {optionElements}
      </select>
      <br/>
    </>
  )
}