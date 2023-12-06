import "./App.css";
import { CountBtn } from "remoteApp/CountBtn";
import useCount from "remoteApp/store";

function App() {
  const [count, setCount] = useCount();
  return (
    <>
      <button onClick={() => setCount((v) => v + 1)}>client btn {count}</button>
      <h2>client</h2>
      <CountBtn />
    </>
  );
}

export default App;
