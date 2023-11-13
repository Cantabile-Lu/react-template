import { useState } from "react";
import { Button } from "antd";

function App() {
  const [count, setCount] = useState(0);
  const [num] = useState(0);
  return (
    <>
      <h1>Vite + {num} </h1>
      <div className="card">
        <Button type={"primary"}>annual</Button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
