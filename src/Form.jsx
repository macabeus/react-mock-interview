import React, { useRef } from 'react'

export const Form = ({ onAdd }) => {
  const inputRefName = useRef()
  const inputRefAge = useRef()

  const onClick = () => {
    const name = inputRefName.current.value
    const age = Number(inputRefAge.current.value)

    onAdd(name, age)
  }

  return (
    <div>
      <label htmlFor="name">Name</label>
      <br />
      <input id="name" ref={inputRefName}></input>
      <br />
      <br />
      <label htmlFor="age">Age</label>
      <br />
      <input id="age" ref={inputRefAge}></input>
      <br />
      <br />
      <button onClick={onClick}>Add</button>
    </div>
  )
}
