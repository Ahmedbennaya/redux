import React, { useState } from 'react';  
import { useDispatch } from 'react-redux';  
import { addTask } from '../tasksSlice';  

const AddTask = () => {  
  const [description, setDescription] = useState('');  
  const dispatch = useDispatch();  

  const handleAddTask = () => {  
    if (!description.trim()) {  
      alert("Task description cannot be empty.");  
      return;  
    }  
    dispatch(addTask(description));  
    setDescription('');  
  };  

  return (  
    <div className="flex mb-4">  
      <input  
        type="text"  
        placeholder="Enter task description"  
        value={description}  
        onChange={(e) => setDescription(e.target.value)}  
        className="border border-gray-300 rounded-l-md p-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"  
      />  
      <button   
        onClick={handleAddTask}   
        disabled={!description.trim()}  
        className={`bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-200 ${!description.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}  
      >  
        Add Task  
      </button>  
    </div>  
  );  
};  

export default AddTask;
