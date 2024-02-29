import React from "react";

export const Select = ({ options, hook, set }) => {
  const selectProps = {
    value: hook,
    onChange: (e) => {
      set(e.target.value);
    }
  }

  const optionElements = options.map((option, index) => (
    <option key={index} value={option.value}>
      {option.text}
    </option>
  ))

  return (
    <select {...selectProps}>
      {optionElements}
    </select>
  )
}
