import { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";
import UserForm from "./UserForm";

function UserList() {
  const [userData, setUserData] = useState<any[]>([]);

  // TEST - List all clients to console //
  useEffect(() => {
    axios.get(`http://localhost:3000/listall`).then((res) => {
      let userRes = res.data;
      setUserData(userRes);
    });
  }, []);

  var userDisplay = [];
  userDisplay = userData.map((item, index) => {
    if (item.Languages.includes(",")) {
      item.Languages = item.Languages.replaceAll(",", " ");
    }
    return (
      <tr key={index} className="tablerow">
        <td className="flexcol-5">{item.clientID}</td>
        <td className="flexcol-20">{item.FirstName}</td>
        <td className="flexcol-15">{item.LastName}</td>
        <td className="flexcol-15">{item.DateBirth}</td>
        <td className="flexcol-20">{item.Languages}</td>
        <td className="flexcol-5">{item.FundingSource}</td>
        <td className="flexcol-5">
          <button className="editbutton">Edit</button>
          <button className="deletebutton">Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <section className="usersectionbox">
        <h1>Current Users List</h1>

        <table className="usersectiontable">
          <thead>
            <tr className="tableheader">
              <th className="flexcol-5">Client ID</th>
              <th className="flexcol-20">First Name</th>
              <th className="flexcol-15">Last Name</th>
              <th className="flexcol-15">Date of birth</th>
              <th className="flexcol-20">Languages Spoken</th>
              <th className="flexcol-5">Funding Source</th>
              <th className="flexcol-5">Edit / Delete</th>
            </tr>
          </thead>
          <tbody>{userDisplay}</tbody>
        </table>
      </section>
    </>
  );
}

export default UserList;
