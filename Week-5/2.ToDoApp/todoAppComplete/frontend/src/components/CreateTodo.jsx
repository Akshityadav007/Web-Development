// this is to store all the components which we create in our website

import { useState } from "react";

export function CreateTodo(props){

    // create local states to get inputs (although we'll use react-query later for these things)
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");

    return <div>
        <input style = {{
            marginLeft : 10,
            paddingLeft : 5
        }} 
        type = 'text' placeholder = 'title' onChange={function (e){
            const value = e.target.value;
            setTitle(e.target.value);
            }} 
        /> <br />
        <input id = "desc" style = {{
            padding : 10, 
            margin : 10
        }} 
        type = 'text' placeholder = 'description' onChange={function (e){
            const value = e.target.value;
            setDesc(e.target.value);
            }}
        /> <br /> 

        <button style = {{ marginLeft : 10 }}
            onClick={() => {
                // we should use axios library to better do this
                fetch("http://localhost:3000/todo", {
                    method : "POST",
                    body : JSON.stringify({
                        title : title,
                        description : description,
                        completed : false
                    }),
                    headers : {
                        "Content-type" : "application/json"     // this tells the backend that this is a json
                    }
                })
                .then(async function(res) {
                    await res.json();
                    alert("Todo added!");
                })
            }}> Add a Todo
        </button>
        </div>
}