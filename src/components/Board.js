import React from "react";

import Square from './Square';

const style ={
    border: '4px solid blue',
    borderRadius: '8px',
    width: '250px',
    height: '250px',
    marginTop: '180px',
    marginLeft: '500px',
    marginRight: '500px',
    display: 'grid',
    gridTemplate: 'repeat(3,1fr)/ repeat(3,1fr)'
}
const Board =({squares,onClick}) =>(
    
         <div style={style}>
             {squares.map((square,i)=>(
                 <Square key={i} value={square} onClick={()=> onClick(i)}/>
             )
             )}
           
            </div>
    )


export default Board;