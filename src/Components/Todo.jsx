import './Todo.css';

function Todo({ title, Modal}) {
function deleteTodo(id){
    console.log('deleteTodo()', title.toUpperCase())
}
    return (
        <div className="Todo"> 
            <p>
                {title}
            </p>
          
            <button onClick={()=>deleteTodo(1)}>
               Delete
            </button>
        </div>
    )
}

export default Todo;