import React from 'react'
import Todo from './Todo'

export default function Todos({todoItems,onDelete}) {
  return (
    <div>
        {todoItems.length===0? ("No todos to Display"):(
        todoItems.map((todo)=> {
            return <Todo todoItem = {todo} key={todo.sno} onDelete = {onDelete}/>
        })
        )}
    </div>
  )
}



