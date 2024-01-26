import React from "react";
const PlayButton = (props)=>{
    return(
        <div>
            <button className="play-btn" onClick={props.click}>Play Again</button>
        </div>
    )
}
export default PlayButton;