import { useState } from "react";
import "./EditUser.css";

interface baseFormData {
  clientID: number;
  FirstName: string;
  LastName: string;
  DateBirth: string;
  Languages: string;
  FundingSource: string;
}

export default function EditUser(editID: any) {
  const [newData, setNewData] = useState<baseFormData>({
    clientID: 0,
    FirstName: "",
    LastName: "",
    DateBirth: "",
    Languages: "",
    FundingSource: "",
  });

  const [originalData, setOriginalData] = useState<baseFormData>({
    clientID: 0,
    FirstName: "",
    LastName: "",
    DateBirth: "",
    Languages: "",
    FundingSource: "",
  });
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [modal, setModal] = useState(false);

  function toggleModal() {
    if (modal === false) {
      setModal(true);
      getUserCall();
    } else {
      setModal(false);
      setNewData({
        clientID: 0,
        FirstName: "",
        LastName: "",
        DateBirth: "",
        Languages: "",
        FundingSource: "",
      });
      setOriginalData({
        clientID: 0,
        FirstName: "",
        LastName: "",
        DateBirth: "",
        Languages: "",
        FundingSource: "",
      });
      setPage(0);
    }
  }

  //API - Get the users current info
  function getUserCall() {
    fetch(`http://localhost:3000/getuser/${editID.editID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setNewData(data);
        setOriginalData(data);
      });
  }

  //API - Update User w/ new Info
  function updateUser() {
    console.log(newData);
    fetch(`http://localhost:3000/updateuser/${editID.editID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientID: editID.editID,
        firstName: newData.FirstName,
        lastName: newData.LastName,
        dateBirth: newData.DateBirth,
        languages: newData.Languages,
        fundingSource: newData.FundingSource,
      }),
    });

    setPage(2);
    setLoading(true);
    setTimeout(() => {
      location.reload();
    }, 5000);
  }

  //API - Delete the user
  function deleteUser() {
    fetch(`http://localhost:3000/deleteuser/${editID.editID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientID: editID.editID,
      }),
    });

    setPage(2);
    setLoading(true);
    setTimeout(() => {
      location.reload();
    }, 5000);
  }

  function nextPage() {
    setPage(1);
  }

  function backPage() {
    setPage(0);
  }

  function delPage() {
    setPage(2);
  }

  function changeUpdate(e: any) {
    const { name, value } = e.target;
    setNewData((prevData) => ({ ...prevData, [name]: value }));
  }

  switch (modal) {
    case false:
      return (
        <>
          <div>
            <button className="editbutton" onClick={toggleModal}>
              Edit
            </button>
          </div>
        </>
      );
    case true:
      switch (page) {
        case 0:
          return (
            <>
              <div>
                <button className="editbutton" onClick={toggleModal}>
                  Edit
                </button>
              </div>
              <div className="overlay">
                <div className="flexbox">
                  <div className="modalbox">
                    <button className="closebutton" onClick={toggleModal}>
                      <i className="fa-solid fa-xmark" />
                    </button>
                    <h1>Please Edit User Data:</h1>
                    <form onSubmit={nextPage} className="editbox">
                      <p>Client ID #{newData.clientID}</p>
                      <button className="backbutton" onClick={delPage}>
                        {" "}
                        DELETE USER{" "}
                      </button>
                      <label className="forminput">
                        <h2>First Name:</h2>
                        <input
                          type="text"
                          placeholder="Enter First Name"
                          name="FirstName"
                          onChange={changeUpdate}
                          value={newData.FirstName}
                          required
                        />
                      </label>

                      <label className="forminput">
                        <h2>Last Name:</h2>
                        <input
                          type="text"
                          placeholder="Enter Last Name"
                          name="LastName"
                          onChange={changeUpdate}
                          value={newData.LastName}
                          required
                        />
                      </label>

                      <label className="forminput smallsec">
                        <h2>Date of Birth:</h2>
                        <input
                          type="date"
                          name="DateBirth"
                          onChange={changeUpdate}
                          value={newData.DateBirth}
                          required
                        />
                      </label>

                      <label className="forminput">
                        <h2>Languages Spoken:</h2>
                        <input
                          type="text"
                          placeholder="Enter Spoken Languages - If Multiple, Please seperate with a comma (,)"
                          name="Languages"
                          onChange={changeUpdate}
                          value={newData.Languages}
                          required
                        />
                      </label>

                      <label className="smallsec forminput ">
                        <h2>Funding Source:</h2>
                        <select
                          name="FundingSource"
                          onChange={changeUpdate}
                          value={newData.FundingSource}
                          required
                        >
                          <option value="NDIS">NDIS</option>
                          <option value="HCP">HCP</option>
                          <option value="CHSP">CHSP</option>
                          <option value="DVA">DVA</option>
                          <option value="HACC">HACC</option>
                        </select>
                      </label>
                      <br />
                      <button
                        className="submitbutton"
                        type="submit"
                        color="primary"
                      >
                        Submit Info
                      </button>
                      <br />
                    </form>
                  </div>
                </div>
              </div>
            </>
          );
        case 1:
          return (
            <>
              <div>
                <button className="editbutton" onClick={toggleModal}>
                  Edit
                </button>
              </div>
              <div className="overlay">
                <div className="flexbox">
                  <div className="modalbox editbox">
                    <button className="closebutton" onClick={toggleModal}>
                      <i className="fa-solid fa-xmark" />
                    </button>
                    <h1>Does This Info Look Correct?</h1>
                    <p>
                      Guide:{" "}
                      <em>
                        Original <i className="fa-solid fa-angles-right" /> New
                        Data{" "}
                      </em>
                    </p>
                    <h4 className="title">
                      First Name:
                      <p>
                        <em>{originalData.FirstName}</em>{" "}
                        <i className="fa-solid fa-angles-right" />{" "}
                        {newData.FirstName}
                      </p>
                    </h4>
                    <h4>
                      Last Name:
                      <p>
                        <em>{originalData.LastName}</em>{" "}
                        <i className="fa-solid fa-angles-right" />{" "}
                        {newData.LastName}
                      </p>
                    </h4>
                    <h4>
                      Date Of Birth:
                      <p>
                        <em>{originalData.DateBirth}</em>{" "}
                        <i className="fa-solid fa-angles-right" />{" "}
                        {newData.DateBirth}
                      </p>
                    </h4>
                    <h4>
                      Spoken Languages:
                      <p>
                        <em>{originalData.Languages}</em>{" "}
                        <i className="fa-solid fa-angles-right" />{" "}
                        {newData.Languages}
                      </p>
                    </h4>
                    <h4>
                      Funding Source:
                      <p>
                        <em>{originalData.FundingSource}</em>{" "}
                        <i className="fa-solid fa-angles-right" />{" "}
                        {newData.FundingSource}
                      </p>
                    </h4>
                    <button
                      className="backbutton"
                      type="submit"
                      color="primary"
                      onClick={backPage}
                    >
                      Go Back
                    </button>
                    <button
                      className="submitbutton"
                      type="submit"
                      color="primary"
                      onClick={updateUser}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        case 2:
          return (
            <>
              <div>
                <button className="editbutton" onClick={toggleModal}>
                  Edit
                </button>
              </div>
              <div className="overlay">
                <div className="flexbox">
                  <div className="modalbox editbox">
                    <button className="closebutton" onClick={toggleModal}>
                      <i className="fa-solid fa-xmark" />
                    </button>
                    <h1>Confirm Deletion of this user:</h1>
                    <h4 className="title">
                      First Name:
                      <p>
                        <em>{originalData.FirstName}</em>
                      </p>
                    </h4>
                    <h4>
                      Last Name:
                      <p>
                        <em>{originalData.LastName}</em>
                      </p>
                    </h4>
                    <h4>
                      Date Of Birth:
                      <p>
                        <em>{originalData.DateBirth}</em>
                      </p>
                    </h4>
                    <h4>
                      Spoken Languages:
                      <p>
                        <em>{originalData.Languages}</em>
                      </p>
                    </h4>
                    <h4>
                      Funding Source:
                      <p>
                        <em>{originalData.FundingSource}</em>
                      </p>
                    </h4>
                    <button
                      className="backbutton"
                      type="submit"
                      color="primary"
                      onClick={backPage}
                    >
                      Go Back
                    </button>
                    <button
                      className="submitbutton"
                      type="submit"
                      color="primary"
                      onClick={deleteUser}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        case 3:
          return (
            <div>
              <img src="/DualRing.svg" />
              <h3>Creating User!</h3>
              <h4>Page will refresh shortly...</h4>
            </div>
          );
      }
  }
}
