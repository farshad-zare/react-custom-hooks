import { memo, useMemo, useState } from "react";
import "./App.css";

import useAxios from "./hooks/useAxios";

function App() {
  console.log("app rendered");
  const [url, setUrl] = useState(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  const fetchParams = useMemo(() => {
    return {
      url,
      method: "get",
    };
  }, [url]);

  const { data, isLoading, error } = useAxios(fetchParams);
  console.log(error);
  return (
    <div className="App">
      <header className="App-header">
        <h2>{isLoading ? "laoding" : data.title}</h2>
        <button
          onClick={() => {
            setUrl("httpbin.org/status/404");
          }}>
          changeUrl
        </button>
      </header>
    </div>
  );
}

export default memo(App);
