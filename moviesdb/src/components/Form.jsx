import React from "react";
import { useGlobalContext } from "../Provider";

export default function Form() {
  const { setQuery, error, query } = useGlobalContext();

  return (
    <form onSubmit={e => e.preventDefault()}>
      <h2>search the movie titles</h2>
      <input
        type="text"
        placeholder="search.."
        onChange={e => {
          setQuery(e.target.value);
        }}
        value={query}
      />
      {error.show && <div>{error.msg}</div>}
    </form>
  );
}
