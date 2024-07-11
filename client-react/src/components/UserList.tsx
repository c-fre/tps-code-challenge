import { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";
import UserForm from "./UserForm";
import EditUser from "./EditUser";

function UserList() {
  const [userData, setUserData] = useState<any[]>([]);

  // API - Grab all users and set to an array //
  useEffect(() => {
    axios.get(`http://localhost:3000/listall`).then((res) => {
      let userRes = res.data;
      setUserData(userRes);
    });
  }, []);

  // Map all users to table results //
  var userDisplay = [];
  userDisplay = userData.map((item, index) => {
    if (item.Languages.includes(",")) {
      item.Languages = item.Languages.replaceAll(",", " ");
    }
    return (
      <tr key={index} className="tablerow">
        <td className="flexcol-10">{item.clientID}</td>
        <td className="flexcol-20">{item.FirstName}</td>
        <td className="flexcol-20">{item.LastName}</td>
        <td className="flexcol-20">{item.DateBirth}</td>
        <td className="flexcol-20">{item.Languages}</td>
        <td className="flexcol-5">{item.FundingSource}</td>
        <td className="flexcol-5">
          <EditUser editID={item.clientID} />
        </td>
      </tr>
    );
  });

  // Set table headers //
  return (
    <>
      <section className="usersectionbox">
        <h1>Current Users List</h1>
        <UserForm />

        <table className="usersectiontable">
          <thead>
            <tr className="tableheader">
              <th className="flexcol-10">Client ID</th>
              <th className="flexcol-20">First Name</th>
              <th className="flexcol-20">Last Name</th>
              <th className="flexcol-20">Date of birth</th>
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
