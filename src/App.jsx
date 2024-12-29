import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import toast from "react-hot-toast";
import JoinCreateChat from "./components/JoinCreateChat";
// import './globalSetup.js';

// if (typeof structuredClone === "undefined") {
//   global.structuredClone = (obj) => JSON.parse(JSON.stringify(obj));
// }

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <JoinCreateChat />
    </div>
  );
}

export default App;
