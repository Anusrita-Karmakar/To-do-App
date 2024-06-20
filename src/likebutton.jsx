import { useState } from "react";


export default function LikeButton(){
    let [isLiked,setisLiked]=useState(false);
    let clicked=()=>{
        setisLiked(!isLiked);
    }
    return(
        <div>
            <p onClick={clicked}>
              {isLiked ? (<i style={{color:"red"}}className="fa-solid fa-heart"></i>): (<i className="fa-regular fa-heart"></i>)}  
            </p>
            
        </div>
    )
}