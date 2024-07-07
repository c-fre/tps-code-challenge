import { useState } from "react";
import "./App.css";

interface baseFormData {
  firstName: string;
  lastName: string;
  dateBirth: string;
  languages: string;
  fundingSource: string;
}

const App = () => {
  const [formData, setFormData] = useState<baseFormData>({
    firstName: "",
    lastName: "",
    dateBirth: "",
    languages: "",
    fundingSource: "",
  });

  const changeUpdate = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitFunc = (e: any) => {
    e.preventDefault();
    console.log(formData);
    fetch("http://localhost:3000/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientID: null,
        firstName: formData.firstName,
        lastName: formData.lastName,
        dateBirth: formData.dateBirth,
        languages: formData.languages,
        fundingSource: formData.fundingSource,
      }),
    });
  };

  const listCall = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:3000/listall")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <section className="flexparent">
        <section className="sectionbox formsection">
          <h1>Add New Client</h1>
          <form onSubmit={submitFunc} className="formbox">
            <label className="forminputsec">
              First Name:
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                onChange={changeUpdate}
                value={formData.firstName}
                required
              />
            </label>
            <hr />
            <label className="forminputsec">
              Last Name:
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                onChange={changeUpdate}
                value={formData.lastName}
                required
              />
            </label>
            <hr />
            <label className="forminputsec">
              Date of Birth:
              <input
                type="date"
                name="dateBirth"
                onChange={changeUpdate}
                value={formData.dateBirth}
                required
              />
            </label>
            <hr />
            <label className="forminputsec">
              Languages Spoken:
              <input
                type="text"
                placeholder="Enter Spoken Languages - If Multiple, Please seperate with a comma (,)"
                name="languages"
                onChange={changeUpdate}
                value={formData.languages}
                required
              />
            </label>
            <hr />
            <label className="optionsec forminputsec ">
              Funding Source:
              <select
                name="fundingSource"
                onChange={changeUpdate}
                value={formData.fundingSource}
                required
              >
                <option value="NDIS">NDIS</option>
                <option value="HCP">HCP</option>
                <option value="CHSP">CHSP</option>
                <option value="DVA">DVP</option>
                <option value="HACC">HACC</option>
              </select>
            </label>
            <br />
            <button type="submit" color="primary">
              Submit Info
            </button>
            <br />
          </form>
          <button onClick={listCall}>List to Console</button>
        </section>
      </section>
    </>
  );
};

export default App;
