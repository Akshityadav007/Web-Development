import { useEffect, useState } from 'react';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Define the function to fetch todos
    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:3000/todos");
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    // Call fetchTodos immediately on mount
    fetchTodos();

    // Setup a polling interval of 10 seconds
    const intervalId = setInterval(() => {
      fetchTodos();
    }, 10 * 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);  // Empty dependency array means this runs only on mount

  return (
    <div>
      <CreateTodo />
      <hr style={{ border: '1px solid #ccc', margin: '10px 0' }} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
