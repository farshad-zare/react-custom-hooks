import { useEffect, useState } from "react";
import axios from "axios";

function useAxios(dataUrl) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    let isMouted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setIsloading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMouted) {
          setData(response.data);
          setError(null);
        }
      } catch (err) {
        if (isMouted) {
          setError(err.message);
          setData([]);
        }
      }
    };

    function cleanUp() {
      isMouted = false;
      source.cancel();
    }

    fetchData(dataUrl);
    return cleanUp;
  }, [dataUrl]);

  return { data, isLoading, error };
}

export default useAxios;
