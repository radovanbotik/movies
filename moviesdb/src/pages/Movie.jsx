import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";

export default function Movie() {
  const { id } = useParams();
  const { loading, data: movie, error } = useFetch(`&i=${id}`);
  if (loading) {
    return <h2>loading...</h2>;
  }
  if (error.show) {
    <div className="error">
      <h2>an error has occured</h2>
      <Link to="/">back to search</Link>
    </div>;
  }
  const {
    Title: name,
    Year: year,
    imdbID: ID,
    Poster: img,
    Plot: plot,
  } = movie;

  return (
    <article>
      <img src={img && img} alt={name} />
      <h2>{name}</h2>
      <h4>{year}</h4>
      <p>{plot}</p>
      <Link to="/">back to search</Link>
    </article>
  );
}
