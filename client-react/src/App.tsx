import React, { useState } from "react";
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

  const changeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitFunc = (e: any) => {
    e.preventDefault();
    console.log("Button Clicked");
    fetch("http://localhost:3000/createuser", {
      method: "POST",
      body: JSON.stringify({
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
      <section>
        <h1>Test Table Input</h1>
        <form onSubmit={submitFunc}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              onChange={changeUpdate}
              value={formData.firstName}
              required
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              onChange={changeUpdate}
              value={formData.lastName}
              required
            />
          </label>
          <br />
          <label>
            Date of Birth:
            <input
              type="date"
              name="dateBirth"
              onChange={changeUpdate}
              value={formData.dateBirth}
              required
            />
          </label>
          <br />
          <label>
            Languages Spoken:
            <input
              type="text"
              name="languages"
              onChange={changeUpdate}
              value={formData.languages}
              required
            />
          </label>
          <br />
          <label>
            Funding Source:
            <input
              type="text"
              name="fundingSource"
              onChange={changeUpdate}
              value={formData.fundingSource}
              required
            />
          </label>
          <br />
          <button type="submit" color="primary">
            Submit Info
          </button>
        </form>
      </section>
      <section>
        List API Call:
        <button onClick={listCall}>List to Console</button>
      </section>
    </>
  );
};

export default App;
