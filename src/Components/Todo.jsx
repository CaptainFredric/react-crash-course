import './Todo.css';

function Todo({ title, OnTodoDelete }) {
    return (
        <div className="Todo">
            <p>{title}</p>
            <button onClick={OnTodoDelete}>Delete</button>
        </div>
    );
}

export default Todo;