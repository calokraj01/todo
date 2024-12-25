import React from 'react'

export default function Todo({todoItem, onDelete}) {
  return (
    <div>
      <h4>{todoItem.title}</h4>
      <p>{todoItem.desc}</p>
      <button onClick={()=>{onDelete(todoItem)}}>X</button>
    </div>
  )
}
