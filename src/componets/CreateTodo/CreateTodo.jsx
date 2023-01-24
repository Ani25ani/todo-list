import React, { useState } from 'react'
import './CreateTodo.css'

export function CreateTodo(props) {
  const [inputValue, setInputValue] = useState("")

  const submit = (event) => {
    event.preventDefault()

    if (props.todosLen < 10) {
      props.onAddTodo(inputValue)
      setInputValue('');
    } else {
      alert("Нельзя")
    }
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder='Enter todo here' value={inputValue} onChange={handleChange} />
      <span><button>+Sumit</button></span>
    </form>
  )
}
