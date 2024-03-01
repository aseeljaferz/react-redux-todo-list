import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventdefault()

        dispatch(addTodo(input))
        setInput('');
    }

  return (
    <form onSubmit={addTodoHandler} className='space-x-3 my-12'>
        <input 
            className='bg-gray-800 rounded border border-gray-700 focus:border-green-700 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            type="text" 
            placeholder='Enter a task' 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
        />
        <button type='submit' className='text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg'>Add Todo</button>
    </form>
  )
}

export default AddTodo;
