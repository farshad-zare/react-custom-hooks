// how to use:
// import useAxios from "./hooks/useAxios";
// const [url, setUrl] = useState(
//   "https://jsonplaceholder.typicode.com/todos/1"
// );
//
// const fetchParams = useMemo(() => {
//   return {
//     url,
//     method: "get",
//   };
// }, [url]);
// const { data, isLoading, error } = useAxios(fetchParams);
import { useEffect, useState } from "react";
import axios from "axios";

function useAxios(params) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    let isMouted = true;
    const source = axios.CancelToken.source();

    const requestParams = Object.assign(params, { cancelToken: source.token });
    const fetchData = async (config) => {
      setIsloading(true);
      try {
        const response = await axios.request(config);
        if (isMouted) {
          setData(response.data);
          setError(null);
        }
      } catch (err) {
        if (isMouted) {
          setError(err.message);
          setData([]);
        }
      } finally {
        if (isMouted) {
          setIsloading(false);
        }
      }
    };

    function cleanUp() {
      isMouted = false;
      source.cancel();
    }

    fetchData(requestParams);

    return cleanUp;
  }, [params]);

  return { data, isLoading, error };
}

export default useAxios;
