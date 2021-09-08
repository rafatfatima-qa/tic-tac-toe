import { useState } from 'react';
import { calculateWinner } from './Helpers';
import Board from './Board';

const styles={
    width: '200px',
    margin:'18px auto',
}
const Game=()=> {
   const [history, setHistory] = useState([Array(9).fill(null)]);
   const [stepNumber,setStepNumber]= useState(0);
   const [xIsNext, setXisNext]=  useState(true);
   const winner = calculateWinner(history[stepNumber]);
    const handleClick = i =>{
        const timeInHistory =history.slice(0,stepNumber + 1)
        const current = timeInHistory[stepNumber];
        const squares =[...current];
       
        if(winner || squares[i])
        return;
        
        squares[i]= xIsNext ? 'x' : '0';
        setHistory([...timeInHistory,squares]);
        setStepNumber(timeInHistory.length)
        setXisNext(!xIsNext);

    }
    const jumpTo = step => {
        setStepNumber(step);
        setXisNext(step % 2 === 0)
    };
   const renderMoves=()=> (
       history.map((__step,move)=>{
           const destination = move ? `Go to move${move}` : 'Start Game';
           return(
               <li key={move}>
                   <button onClick={()=> jumpTo(move)}>{destination}</button>
               </li>
           )
       })
       
   )
        
    
    return (
        <>
        <Board  squares={history[stepNumber]} onClick={handleClick} />
       <div style={styles}>
           <p>{winner ? 'Winner: ' + winner :'Next Player: ' +(xIsNext ? 'x' : '0')}</p>
           {renderMoves()}
       </div>
        </>
    )
    }


export default Game;