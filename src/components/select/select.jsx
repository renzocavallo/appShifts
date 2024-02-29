import React from "react"

export const Select = ({ options, hook, set }) => {
  const selectProps = {
    value: hook,
    onChange: (e) => {
      set(e.target.value)
    }
  }

  const optionElements = options.map((opt, index) => (
    <option key={index} value={opt.value}>
      {opt.text}
    </option>
  ))

  return (
    <select {...selectProps}>
      {optionElements}
    </select>
  )
}
