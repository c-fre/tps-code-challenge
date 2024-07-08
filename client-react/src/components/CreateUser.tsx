import { useState } from "react";
import "./CreateUser.css";

interface baseFormData {
  firstName: string;
  lastName: string;
  dateBirth: string;
  languages: string;
  fundingSource: string;
}

const CreateUser = () => {
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

    //Language Format
    let langCheck = formData.languages.trim();
    if (formData.languages.includes(",")) {
      langCheck = langCheck.replace(/\s+/g, "");
      formData.languages = langCheck;
    }

    //Create User in DB
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

  // App Section //
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
        </section>
      </section>
    </>
  );
};

export default CreateUser;
