/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import { fetchTodos } from './store/todoSlice'

function App() {
 
  const dispatch = useDispatch();
  const state = useSelector((state)=> state);

  console.log('state',state)
  if (state.todo.isLoading){
    return <h1>Loading ....</h1>
  }

  return (
    <>
      <h1>Todo List </h1>
      <button onClick={(e) => dispatch(fetchTodos())}  >fetch</button>
      {
       state.todo.data && state.todo.data.map(e => <li>{e.title}</li> )
      }
    </>
  )
}

export default App
