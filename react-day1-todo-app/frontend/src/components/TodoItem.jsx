import React from 'react';

const TodoItem = () => {
    return (
        <li class = "todo-item">
        <span>
        <input type ='checkbox'></input>
        <span class = "todo-item-text"> Eat </span>
        </span>
        <p>...</p>

        </li>
    )
}

export default TodoItem