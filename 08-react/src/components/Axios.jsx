import axios from "axios"
import { useState } from "react"
const Axios = () => {
    const [data, setData] = useState([])
    const getData = async () => {
        const data = await axios.get("https://jsonplaceholder.typicode.com/users")
        setData(data.data)
    }
  return (
 
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
  )
}

export default Axios