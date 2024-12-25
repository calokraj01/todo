import { useState, useEffect } from 'react';
import './App.css';
import Addtodo from './components/Addtodo';
import Navbar from './components/Navbar';
import Todos from './components/Todos';

function App() {
  const [todoItems, settodoItems] = useState(() => {
    const savedTodos = localStorage.getItem("todoItems");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  const onDelete = (todo) => {
    settodoItems(todoItems.filter((e) => e.sno !== todo.sno));
  };

  const addTodo = (title, desc) => {
    let sno = todoItems.length === 0 ? 1 : todoItems[todoItems.length - 1].sno + 1;

    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    settodoItems([...todoItems, newTodo]);
  };

  return (
    <>
      <Navbar title='ToDo' />
      <div className="App">
        <div className="todo-form-div">
          <Addtodo addTodo={addTodo} />
        </div>
        <div className="all-todos">
          <Todos todoItems={todoItems} onDelete={onDelete} />
        </div>
      </div>
    </>
  );
}

export default App;
