import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const App = () => {

  const [description, setDescription] = useState('');
  // const [todos, setTodos] = useState([]);
  // const [editTodo, setEditTodo] = useState(null);
  // const [editedText, setEditedText] = useState('');

  const onSubmitForm = async(e) => {
    e.preventDefault();
    try{
      await axios.post('http://localhost:5050/api/v1/todos', { description, completed:false});
      setDescription('');
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='min-h-screen bg-gray-800 flex items-center justify-center p-4'>
      <div className='bg-gray-50 rounded-2xl shadow-xl w-full max-w-lg p-8'>
      <h1 className='text-4xl font-bold text-gray-800 mb-8'>PERN TODO APP</h1>
      <form onSubmit={onSubmitForm} className='flex items-center gap-2 shadow-sm border p-2 rounded-lg mb-6'>
        <input className='flex-1 w-full outline-none px-3 py-2 text-gray-700 placeholder-gray-400' type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='What needs to be done?' required/>
        <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium cursor-pointer'>Add Task</button>
      </form>
      </div>
    </div>
  )
}

export default App
