import React from 'react';

const Button = () => {
    const handleClick = () => {
        alert('Button clicked!');
      };
    return <button class = "todo-btn" onClick={handleClick}>Add Todo</button>
}

export default Button;