import {useState, useEffect} from "react";

export function Question2(){
    const [bgColor, setBgColor] = useState("white");

    useEffect(() => {
        document.body.style.backgroundColor = bgColor;
        return () => {
            document.body.style.backgroundColor = 'white'; // Reset to default on cleanup
          };
    }, [bgColor]);

    return <div style = {{backgroundColor : bgColor}}>
        <button style = {{backgroundColor : "red"}} 
            onClick={() => {setBgColor("red")}}>
            Red
        </button>
        <button style = {{backgroundColor : "yellow"}} 
            onClick={() => {setBgColor("yellow")}}>
            Yellow
        </button>
        <button style = {{backgroundColor : "black" , color : "white"}} 
            onClick={() => {setBgColor("black")}}>
            Black
        </button>
        <button style = {{backgroundColor : "purple"}} 
            onClick={() => {setBgColor("purple")}}>
            Purple
        </button>
        <button style = {{backgroundColor : "green"}} 
            onClick={() => {setBgColor("green")}}>
            Green
        </button>
        <button style = {{backgroundColor : "blue"}} 
            onClick={() => {setBgColor("blue")}}>
            Blue
        </button>
        <button style = {{backgroundColor : "orange"}} 
            onClick={() => {setBgColor("white")}}>
            Default
        </button>
    </div>
}