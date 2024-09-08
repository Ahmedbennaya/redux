import React, { useState } from 'react';  
import { useDispatch } from 'react-redux';  
import { toggleTaskStatus, editTask } from '../tasksSlice';  

const Task = ({ task }) => {  
  const dispatch = useDispatch();  
  const [isEditing, setIsEditing] = useState(false);  
  const [newDescription, setNewDescription] = useState(task.description);  

  const handleToggleStatus = () => {  
    dispatch(toggleTaskStatus(task.id));  
  };  

  const handleSaveEdit = () => {  
    if (!newDescription.trim()) {
      alert("Task description cannot be empty.");
      return;
    }
    dispatch(editTask({ id: task.id, newDescription }));  
    setIsEditing(false);  
  };  

  return (  
    <div className="flex items-center justify-between my-2 p-2 border rounded-md bg-white shadow-sm">  
      {isEditing ? (  
        <input  
          type="text"  
          value={newDescription}  
          onChange={(e) => setNewDescription(e.target.value)}  
          className="p-2 border rounded-md w-3/4 focus:outline-none focus:ring-2 focus:ring-blue-400"  
        />  
      ) : (  
        <span className={`flex-1 ${task.isDone ? 'line-through text-gray-500' : ''}`}>  
          {task.description}  
        </span>  
      )}  
      <div>  
        <button onClick={handleToggleStatus} className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition duration-200 mr-2">  
          {task.isDone ? 'Undo' : 'Done'}  
        </button>  
        {isEditing ? (  
          <button onClick={handleSaveEdit} className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200">  
            Save  
          </button>  
        ) : (  
          <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition duration-200">  
            Edit  
          </button>  
        )}  
      </div>  
    </div>  
  );  
};  

export default Task;
