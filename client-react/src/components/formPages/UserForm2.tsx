import { FormEvent } from "react";

export function UserForm2({ values, backPage, nextPage, changeUpdate }: any) {
  //Basic Check Func to Allow Form to not submit unless completed
  const nextPageCheck = (e: FormEvent) => {
    e.preventDefault();

    if (values.languages === "" || values.fundingSource === "") {
    } else {
      nextPage();
    }
  };
  return (
    <form onSubmit={nextPageCheck}>
      <label className="forminput">
        <h2>Languages Spoken:</h2>
        <input
          type="text"
          placeholder="Enter Spoken Languages - If Multiple, Please seperate with a comma (,)"
          name="languages"
          onChange={(e) => changeUpdate({ languages: e.target.value })}
          value={values.languages}
          required
        />
      </label>
      <label className="forminput smallsec">
        <h2>Funding Source:</h2>
        <select
          name="fundingSource"
          onChange={(e) => changeUpdate({ fundingSource: e.target.value })}
          value={values.fundingSource}
          required
        >
          <option value="" selected disabled hidden>
            Please Select One:
          </option>
          <option value="NDIS">NDIS</option>
          <option value="HCP">HCP</option>
          <option value="CHSP">CHSP</option>
          <option value="DVA">DVA</option>
          <option value="HACC">HACC</option>
        </select>
      </label>
      <button type="button" onClick={backPage} className="backButton">
        <i className="fa-solid fa-arrow-left" /> Back
      </button>
      <button type="submit" onClick={nextPageCheck} className="nextButton">
        <i className="fa-solid fa-check" /> Next
      </button>
    </form>
  );
}
