import React from "react";
import { useState, useEffect } from "react";
import { ACCESS, ENDPOINT } from "./Provider";
// let ENDPOINT = `http://www.omdbapi.com/?apikey=${ACCESS}`;

export default function useFetch(urlparams) {
  //the movie

  //for movies
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchData = async url => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json(url);
      if (data.Response === "True") {
        setData(data.Search || data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(`${ENDPOINT}${urlparams}`);
  }, [urlparams]);
  return { data, loading, error };
}
