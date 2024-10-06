import {useState} from "react";

const colors = [
    {
        color : "Red",
        value : "red"
    }, 
    {
        color : "Yellow",
        value : "yellow"
    }, 
    {
        color : "Black",
        value : "black"
    }, 
    {
        color : "Purple",
        value : "purple"
    }, 
    {
        color : "Green",
        value : "green"
    }, 
    {
        color : "Blue",
        value : "blue"
    }, 
    {
        color : "Default",
        value : "white"
    }
]

export function Question2(){
    const [bgColor, setBgColor] = useState("white");

    return <div style = {{backgroundColor : bgColor}}>
    </div>
}