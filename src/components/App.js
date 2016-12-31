import React from 'react'
import AddTodo from '../containers/AddTodo'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'



const App = () => (
  <div>
  	<AddTodo />
    <VisibleTodoList />
    <Footer />
    "Hello world"
  </div>
)

export default App
