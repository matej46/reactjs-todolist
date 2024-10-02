import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {

  const {todos} = props

  if (!Array.isArray(todos)) {
    return <p>No todos available</p>
  }


  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key = {todoIndex} index = {todoIndex} >
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
