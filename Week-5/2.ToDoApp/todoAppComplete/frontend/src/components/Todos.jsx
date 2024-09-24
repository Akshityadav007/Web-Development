/*
    todos = [
        {
            title : "go gym",
            description : "9-10 gym session",
            completed : false
        }
    ]
*/

// export function Todos({todos}){
//     return <div>
//         {
//         /* <h3>Sample Title</h3>
//         <h4>Sample description</h4>
//         <button>Mark as Completed</button> */
//         }
//         {
//             todos.map(function(todo) {
//                 return <div> 
//                     <h3>{todo.title}</h3>
//                     <h4>{todo.description}</h4>
//                     <button>{todo.completed ? "Completed" : "Mark as Completed"}</button>
//                 </div>
//             })
//         }
//     </div>
// }



export function Todos({ todos }) {
    // ⬇ this is chatgpt
    // Check if `todos` is an array before rendering
    if (!Array.isArray(todos) || todos.length === 0) {
      return <div>No todos available</div>;
    }
  
    return (
      <div>
        {todos.map(function (todo) {
          return (
            <div key={todo.id}> {/* Add unique key for each todo */}
              <h3>{todo.title}</h3>
              <h4>{todo.description}</h4>
              <button>
                {todo.completed ? "Completed" : "Mark as Completed"}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
  