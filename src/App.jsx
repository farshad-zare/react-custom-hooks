import "./App.css";

import useAxios from "./hooks/useAxios";

function App() {
  console.log("app rendered");
  const { data } = useAxios("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <div className="App">
      <header className="App-header">
        <h2>{data.title}</h2>
      </header>
    </div>
  );
}

export default App;
