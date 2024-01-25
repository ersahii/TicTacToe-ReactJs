import React , { useState} from "react";
import Square from "./Square";
const Board = ()=>{
    const [state , setState ] = useState(Array(9).fill(null));

    // click handler funtion 
    const handleClick = (index)=>{
    }
    return(
        <div className="board-container">
            <div className="board-row">
                <Square value = {state[0]} onclick ={()=>{handleClick(0);}}/>
                <Square value = {state[1]} onclick ={()=>{handleClick(1);}}/>
                <Square value = {state[2]} onclick ={()=>{handleClick(2);}}/>
            </div>
            <div className="board-row">
                <Square value = {state[3]} onclick ={()=>{handleClick(3);}}/>
                <Square value = {state[4]} onclick ={()=>{handleClick(4);}}/>
                <Square value = {state[5]} onclick ={()=>{handleClick(5);}}/>
            </div>
            <div className="board-row">
                <Square value = {state[6]} onclick ={()=>{handleClick(6);}}/>
                <Square value = {state[7]} onclick ={()=>{handleClick(7);}}/>
                <Square value = {state[8]} onclick ={()=>{handleClick(8);}}/>
            </div>
        </div>
    )
}
export default Board;