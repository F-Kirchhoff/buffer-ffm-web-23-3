import { useState } from "react";

export default function Form() {
  const [text, setText] = useState("");
  const [box, setBox] = useState(false);
  const [area, setArea] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    //TODO: get data from form
    const data = {
      text,
      box,
      area,
    };

    alert("sending data:\n" + JSON.stringify(data, null, 2));
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <input
        type="checkbox"
        checked={box}
        onChange={(event) => setBox(event.target.checked)}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={area}
        onChange={(event) => setArea(event.target.value)}
      ></textarea>
      <button type="submit">submit</button>
    </form>
  );
}
