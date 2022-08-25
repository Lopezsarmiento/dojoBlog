import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for the resource.");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.log("Error Fetching data: ", err.message);
          setError(err.message);
          setIsLoading(false);
      });

  }, [url]);

  return { data, isLoading, error };
};

export default UseFetch;

