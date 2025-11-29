import { useState } from "react";

const Advance = () => {
  // Deal with Objects using useState
  const [users, setUsers] = useState({ name: "Hamza", age: 21 });
  // Deal with Arrays using useState
  const [num, setNum] = useState([10, 20, 30]);

  function btnClicked() {
    const newUsers = { ...users };
    newUsers.name = "Zaid";
    newUsers.age = 25;
    setUsers(newUsers);

    const newNum = [...num];
    newNum.push(40, 50);
    setNum(newNum);
  }
  return (
    <div>
      <h1>
        User Data : {users.name} , {users.age} <br /> {num}
      </h1>
      <button onClick={btnClicked}>Change Data</button>
    </div>
  );
};

export default Advance;