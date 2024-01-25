import React from "react";
const Square = (props)=>{
    return (
        <div className="board-square" onClick={props.onclick}>
            <h4>{props.value}</h4>
        </div>
    )
}
export default Square;