import { useEffect, useState } from 'react';
import './App.css';
import { CreateTodo } from './componets/CreateTodo/CreateTodo';
import Header from './componets/Header/Header';
import TodoItem from './componets/TodoItem/TodoItem';

function App() {

  const [isLoading, setloading] = useState(true)
  const todosLocal = JSON.parse(localStorage.getItem('todos')) || []
  const [todos, setTodos] = useState(todosLocal)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 2000)
  }, [])


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (str) => {
    setTodos([...todos, { text: str, status: false, id: Date.now() }])
  }

  const changeStatus = (id) => {
    const newArr = todos.map((item) => {
      console.log(item.id, id);
      if (item.id === id) {
        return { ...item, status: true }
      }
      return item;
    })
    console.log(newArr);
    setTodos(newArr)

  }

  const newTodos = todos.map((item) =>
    <TodoItem
      key={item.id}
      changeStatus={changeStatus}
      title={item.text}
      status={item.status}
      id={item.id} />)

  if (isLoading) {
    return <div className='loader'>
      <h1>loader</h1>
    </div>
  }
  const result = todos.reduce((akk, item) => akk + item.status, 0)

  return (
    <div className="App">
      <Header todosLen={todos.length} compleateTodos={result} />
      <CreateTodo onAddTodo={addTodo} todosLen={todos.length} />
      <div className='todo-list'>
        {newTodos}
      </div>
    </div>
  );
}

export default App;
