import React from "react";
import { useGlobalContext } from "../Provider";
import { Link } from "react-router-dom";

import "./Movies.css";

export default function Movies() {
  const { data: movies, loading } = useGlobalContext();
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <div className="movies-grid">
      {movies.map(movie => {
        const { Poster: img, Title: name, Year: year, imdbID: id } = movie;
        return (
          <article key={id} className="movie-card">
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <h4>{year}</h4>
            <Link to={`movies/${id}`}>See movie</Link>
          </article>
        );
      })}
    </div>
  );
}
