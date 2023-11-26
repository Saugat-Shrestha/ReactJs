import React from 'react';
import './App.css';

function App() {

  const blogObj = {
    title: "Blog title 1",
    description: "hello world"
  }


 
  return (
    <div className="App">
      <div className='blogstyle'>
        <h3>{blogObj.title} </h3>
        <p> {blogObj.description}</p>
      </div>
   
      <div className='blogstyle'>
        <h3>{blogObj.title} </h3>
        <p> {blogObj.description}</p>
      </div>
   
      <div className='blogstyle'>
        <h3>{blogObj.title} </h3>
        <p> {blogObj.description}</p>
      </div>
    </div>
  );
  }

export default App;
