import { useState } from "react";
import "./UserList.css";

//const [userData, setUserData] = useState({});

const UserList = () => {
  // TEST - List all clients to console //
  const listCall = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:3000/listall")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <section className="usersectionbox">
        <h1>List Current Users</h1>
        <button onClick={listCall}>List to Console</button>
      </section>
    </>
  );
};

export default UserList;
