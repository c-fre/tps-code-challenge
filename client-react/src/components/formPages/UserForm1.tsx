import { FormEvent } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export function UserForm1({ values, changeUpdate, nextPage }: any) {
  const nextPageCheck = (e: FormEvent) => {
    e.preventDefault(); // -> Tell the button "NO DO NOT SUBMIT" //

    // Easy No Submit to Allow form to recheck & not allow if blank //
    if (
      values.firstName === "" ||
      values.lastName === "" ||
      values.dateBirth === ""
    ) {
    } else {
      nextPage();
    }
  };

  return (
    <form onSubmit={nextPageCheck}>
      <label className="forminput">
        <h2>First Name:</h2>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstName"
          onChange={(e) => changeUpdate({ firstName: e.target.value })}
          value={values.firstName}
          required
        />
      </label>

      <label className="forminput">
        <h2>Last Name:</h2>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastName"
          onChange={(e) => changeUpdate({ lastName: e.target.value })}
          value={values.lastName}
          required
        />
      </label>

      <label className="forminput smallsec">
        <h2>Date of Birth:</h2>
        <input
          type="date"
          name="dateBirth"
          onChange={(e) => changeUpdate({ dateBirth: e.target.value })}
          value={values.dateBirth}
          required
        />
      </label>
      <button className="nextButton">
        <i className="fa-solid fa-check" /> Next
      </button>
    </form>
  );
}
