import { useState } from "react"


export default function LudoBoard(){
    let [moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});

    let incMoves=()=>{
        
        setMoves({...moves,blue:moves.blue+1});
        console.log(moves);
    }
    return (
        <div>
            <p>Game Begins !</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button onClick={incMoves}style={{backgroundColor:"blue"}}>+1</button>
                
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}}>+1</button>
                
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor:"red"}}>+1</button>
                
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor:"green"}}>+1</button>
            </div>
        </div>
    )
}