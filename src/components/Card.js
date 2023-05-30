import { useState } from "react";

export default function Card({ title, content, showDetails, onToggle }) {
  return (
    <article>
      <h1>{title}</h1>
      <button onClick={onToggle}>more</button>
      {showDetails === true ? <p>{content}</p> : null}
    </article>
  );
}
