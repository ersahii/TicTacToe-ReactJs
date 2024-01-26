import React , { useState} from "react";
import Square from "./Square";
import PlayButton from "./PlayButton";
const Board = ()=>{
    const [state , setState ] = useState(Array(9).fill(null));
    const [isTurnX , setTurnX] = useState(true);
    // click handler funtion 
    const handleClick = (index)=>{
        if(state[index] !==null){
            return;
        }
        const copyState = [...state];
        copyState[index] = isTurnX ? "X" : "0";
        setState(copyState);
        setTurnX(!isTurnX);
    };
    // checking winner 
    const checkWinner =()=>{
        const winnerLogic = [
            // winner logic for rows
            [0 , 1 , 2] , 
            [3 , 4 , 5] , 
            [6 , 7 , 8] , 
            // winner logic in columns 
            [0 , 3 , 6] , 
            [1 , 4 , 7] , 
            [2 , 5 , 8] , 
            // winner logic in Diagonals 
            [0 , 4 , 8] , 
            [2 , 4 , 6]  
        ];
        for (let logic of winnerLogic){
            const [a , b , c ]=logic;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                return state[a]
            }
        }
        return false;
};
const isWinner = checkWinner();
const handleReset = ()=>{
    setState(Array(9).fill(null));
}
    return(
        isWinner ? <div className="Winner-container">
            <h1> {isWinner} player won the game </h1>
            <PlayButton click = {()=>handleReset()}/>
        </div> :<>
            <h1 style={{width: "160px", margin: "auto" ,}}>Turn of : {isTurnX ? "X" : "0"}</h1>
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
        </>
    )
}
export default Board;