import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h2>Are you lost?</h2>
      <Link to="/">return to homepage</Link>
    </div>
  );
}
