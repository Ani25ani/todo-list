import React from 'react'
import css from './Header.module.css'

function Header(props) {
  return (
    <header>
        Todo ({props.compleateTodos} / {props.todosLen})
    </header>
  )
}

export default Header