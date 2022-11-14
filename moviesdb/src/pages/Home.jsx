import React from "react";
import Form from "../components/Form";
import Movies from "../components/Movies";

export default function Home() {
  return (
    <section className="homepage">
      <Form />
      <Movies />
    </section>
  );
}
