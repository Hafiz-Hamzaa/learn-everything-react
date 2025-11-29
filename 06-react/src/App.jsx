import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submited by", title);
          setTitle("");
        }}
      >
        <input
          type="text"
          placeholder="Enter a name..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default App;
