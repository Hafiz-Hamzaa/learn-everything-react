import { useState } from "react"
const Fetch = () => {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    setData(data);
  }
  return (
    <>
      <div>
        <button onClick={getData}>Get Data</button>
        {data.map((elem, idx) => {
          return (
            <p key={idx}>
              {" "}
              {elem.id} {elem.name}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Fetch;
