import { useEffect } from "react";
import Editor from "../../../core/fabricEditor";
import "./App.css";

function App() {
  useEffect(() => {
    const editor = new Editor();
    editor.destory();
  }, []);
  return <>adsa</>;
}

export default App;
