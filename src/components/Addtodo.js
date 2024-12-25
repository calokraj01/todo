import React, { useState } from 'react'

export default function Addtodo(props) {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e)=>{
        e.preventDefault()
        if (!title || !desc) {
            alert("Title and description cannot be blank")
        }
        else {
            props.addTodo(title,desc)
            setTitle("")
            setDesc("")
        }
    }

    return (
        <>
        <h3 className='form-heading'>Add Todo</h3>
            <form className='todo-form' onSubmit={submit}>
                <label htmlFor="title">ToDo Title:</label>
                <br />
                <input type="text" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                <br />
                <label htmlFor="desc">Description:</label>
                <br />
                <input type="text" id="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
                <br />
                <button type="submit">Add ToDo</button>
            </form>
        </>
    )
}
