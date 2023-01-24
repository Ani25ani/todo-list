import React from 'react'
import css from './TodoItem.module.css'

function TodoItem({title, status, changeStatus, id}) {
  const handleChange = () => {
    changeStatus(id)
  }
  return (
    <div className={css.wrapper}>
      <label>
        <input type="checkbox" checked={status} onChange={handleChange} />
        <p className={status ? CSS.compleat : ''}> {title}</p>
      </label>
      <div>
        <button className={css.button}>Edit</button>
        <button className={`${css.button} ${css.button_del}`}>Del</button>
      </div>
    </div>
  )
}

export default TodoItem