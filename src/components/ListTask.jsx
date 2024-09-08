import React, { useState } from 'react';  
import { useSelector } from 'react-redux';  
import Task from './Task';  

const ListTask = () => {  
  const tasks = useSelector((state) => state.tasks.tasks);  
  const [filter, setFilter] = useState('all'); // 'all', 'done', 'not_done'  

  const filteredTasks = tasks.filter((task) => {  
    if (filter === 'all') return true;  
    return filter === 'done' ? task.isDone : !task.isDone;  
  });  

  return (  
    <div>  
      <div className="mb-4 flex space-x-2">  
        <button onClick={() => setFilter('all')} className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md transition duration-200">  
          All  
        </button>  
        <button onClick={() => setFilter('done')} className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md transition duration-200">  
          Done  
        </button>  
        <button onClick={() => setFilter('not_done')} className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md transition duration-200">  
          Not Done  
        </button>  
      </div>  
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (  
          <Task key={task.id} task={task} />  
        ))
      ) : (
        <p className="text-gray-500 text-center">No tasks available</p>
      )}
    </div>  
  );  
};  

export default ListTask;
