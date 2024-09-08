import React from 'react';  
import { Provider } from 'react-redux';  
import store from './store';  
import AddTask from './components/AddTask';  
import ListTask from './components/ListTask';  

const App = () => {  
  return (  
    <Provider store={store}>  
      <div className="max-w-lg mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">  
        <h1 className="text-3xl font-bold mb-6 text-center">To-Do List with Redux</h1>  
        <AddTask />  
        <ListTask />  
      </div>  
    </Provider>  
  );  
};  

export default App;