import * as React from "react";
import "./App.css";

export default function ExpandingTextarea() {
  const [text, setText] = React.useState("");

  return (
    <section className="container">
      <h1>Expanding Textarea</h1>
      <label htmlFor="textarea">Enter or paste in some text</label>
      <textarea
        id="textarea"
        placeholder="Enter some text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        rows={1}
      />
    </section>
  );
}
