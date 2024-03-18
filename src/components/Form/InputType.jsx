import React from 'react'

const InputType = ({labelTitle, inputType, id, placeholder, name, onChange, value, ...props}) => {
  return (
    <>
        <label htmlFor={id} className="form-label">{labelTitle}</label>
        <input
        type={inputType}
        className="form-control"
        id={id}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        {...props}
        /> 
    </>
  )
}

export default InputType
