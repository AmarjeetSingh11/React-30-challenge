import React,{useState} from 'react';
import SquareComponent from './squareComponent';

const Board = () => {
    const [state,setCount] = useState(Array(9).fill(null));

    const [isXTurn,setIsXTurn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for(let logic of winnerLogic){
            const [a,b,c] = logic;
            if( state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                return state[a];

            }
        }
        return false;
    }

    const isWinner = checkWinner();
    const handleClick = (index) => {

        if(state[index] !== null){
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : '0';
        setCount(copyState);
        setIsXTurn(!isXTurn);    
    }
    const handleReset = () => {
        setCount(Array(9).fill(null));
    }
    
    return (
    
        <div className='board-container'>
           <h1>Tic Tac Toe</h1>
            {
            isWinner ? <>
            {isWinner} won the Game
            <button onClick={handleReset} className='reset-btn'>Play Again</button>
            </> : 
            <>
            <h4>Player {isXTurn ? "X" : "0"}</h4>
            <div className='board-row'>
            <SquareComponent 
             onClick ={() => handleClick(0)}
             value = {state[0]}/>
            <SquareComponent 
            onClick ={() => handleClick(1)}
            value = {state[1]}
            />
            <SquareComponent
            onClick ={() => handleClick(2)} 
            value = {state[2]}
            />
            </div>
            <div className='board-row'>
            <SquareComponent 
            onClick ={() => handleClick(3)}
            value = {state[3]}
            />
            <SquareComponent
            onClick ={() => handleClick(4)}
             value = {state[4]}
             />
            <SquareComponent 
            onClick ={() => handleClick(5)}
            value = {state[5]}
            />
            </div>
            <div className='board-row'>
            <SquareComponent
            onClick ={() => handleClick(6)}
             value = {state[6]}
             />
            <SquareComponent 
            onClick ={() => handleClick(7)}
            value = {state[7]}
            />
            <SquareComponent 
            onClick ={() => handleClick(8)}
            value = {state[8]}
            />
            </div>
            </>
            }
        </div>
    );
};
export default Board;