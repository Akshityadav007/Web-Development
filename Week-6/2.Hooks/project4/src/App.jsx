import { useCallback, useState, memo } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const inputFunction = useCallback(() => {
    console.log("Hey there!");
  }, []);

  return (
    <div>
      <ButtonComponent inputFn={inputFunction} />
      <button onClick={() => setCount(count + 1)}>
        Click me {count}
      </button>
    </div>
  );
}


// Note : 'useMemo' and 'memo' are siginificantly different.
// useMemo : Memoizes the result of a computation to avoid re-running expensive calculations on every render.
// memo : lets you skip re-rendering when its props are unchanged.

const ButtonComponent = memo(({ inputFn }) => {
  console.log("child render");

  return (
    <div>
      <button>Button Clicked</button>
    </div>
  );
});

export default App;
