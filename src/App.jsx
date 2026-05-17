import "./App.css"

import Todo from './Components/Todo.jsx';
import Title from './Components/Title.jsx';
import Modal from './Components/Modal.jsx';
import React, { useState, useEffect} from 'react';

function App() {

  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');

function OnTodoDelete(){
    setShowModal(true)
}
  
function cancelModal(){
    setShowModal(false)
}

function confirmModal(){
    setShowModal(false)
}

useEffect(()=>{
console.log('ONLY ONCE ON MOUNT')
})
// Above is misisng dependency array, so it will run on every render
useEffect(() => {
console.log('on mount everytime [] changes');

}, [showModal])
// Above will run on mount and every time showModal changes

useEffect(()=> {
    console.log('EVERY SINGLE RENDER')  
})


  return (
    <div>
      <Title />
      <div className="input__wrapper">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Add a new todo..."
        />
        <button className="btn" onClick={() => console.log('add todo:', inputValue)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo OnTodoDelete={OnTodoDelete} title="Finish Frontend Simplified" onDelete={() => setShowModal(true)} />
        <Todo OnTodoDelete={OnTodoDelete} title="Finish Interview Section" onDelete={() => setShowModal(true)} />
        <Todo OnTodoDelete={OnTodoDelete} title="Land a $100k Job" onDelete={() => setShowModal(true)} />
      </div>
      {showModal && <Modal title="Confirm Delete?" onCancel={cancelModal} onConfirm={confirmModal}/>}
    </div>
  );
}

export default App;
