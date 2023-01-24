import React from 'react'

function Header(props) {
  return (
    <header>
        Todo ({props.compleateTodos} / {props.todosLen})
    </header>
  )
}

export default Header