import React, { useState } from "react";
import "./App.css";

const baseFormData = {
  firstName: "",
  lastName: "",
  dateBirth: "",
  languages: "",
  fundingSource: "",
};

const App = () => {
  const testFunc = (e: any) => {
    e.preventDefault();
    console.log("button clicked");
  };

  return (
    <>
      <section>
        <h1>Test Table Input</h1>
        <form>
          <label>
            First Name:
            <input type="text" name="firstName" />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" name="lastName" />
          </label>
          <br />
          <label>
            Date of Birth:
            <input type="date" name="dateBirth" />
          </label>
          <br />
          <label>
            Languages Spoken:
            <input type="text" name="languages" />
          </label>
          <br />
          <label>
            Funding Source:
            <input type="text" name="fundingSource" />
          </label>
          <br />
          <button type="submit" color="primary" onClick={testFunc}>
            Submit Info
          </button>
        </form>
      </section>
    </>
  );
};

export default App;
