import { FormEvent, useState } from "react";

export default function UserFormSubmit({ values, backPage }: any) {
  const [loading, setLoading] = useState(false);

  const submitFunc = (e: FormEvent) => {
    e.preventDefault();

    //Language Format
    let langCheck = values.languages.trim();
    if (values.languages.includes(",")) {
      langCheck = langCheck.replace(/\s+/g, "");
      values.languages = langCheck;
    }

    //Create User in DB
    fetch("http://localhost:3000/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientID: null,
        firstName: values.firstName,
        lastName: values.lastName,
        dateBirth: values.dateBirth,
        languages: values.languages,
        fundingSource: values.fundingSource,
      }),
    });

    setLoading(true);
    setTimeout(() => {
      location.reload();
    }, 5000);
  };

  switch (loading) {
    case false:
      return (
        <>
          <div>
            <h1>Does This Info Look Correct?</h1>
            <p>First Name: {values.firstName}</p>
            <p>Last Name: {values.lastName}</p>
            <p>Date Of Birth: {values.dateBirth}</p>
            <p>Spoken Languages: {values.languages}</p>
            <p>Funding Source: {values.fundingSource}</p>
            <button type="button" onClick={backPage} className="backButton">
              Prev
            </button>
            <br />
            <button type="button" onClick={submitFunc} className="nextButton">
              Submit User
            </button>
          </div>
        </>
      );
    case true:
      return (
        <div>
          <img src="/DualRing.svg" />
          <h3>Creating User!</h3>
          <h4>Page will refresh shortly...</h4>
        </div>
      );
  }
}
