import React, { FormEvent, useState } from "react";
import { FormMultistepHook } from "./hooks/FormMultistepHook";
import { UserForm1 } from "./formPages/UserForm1";
import { UserForm2 } from "./formPages/UserForm2";

interface baseFormData {
  firstName: string;
  lastName: string;
  dateBirth: string;
  languages: string;
  fundingSource: string;
}

export default function UserForm() {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState<baseFormData>({
    firstName: "",
    lastName: "",
    dateBirth: "",
    languages: "",
    fundingSource: "",
  });

  function changeUpdate(fields: Partial<baseFormData>) {
    setFormData((prevData) => ({ ...prevData, ...fields }));
  }

  const { pages, currentPage, page, isFirst, isLast, backPage, nextPage } =
    FormMultistepHook([
      <UserForm1 {...formData} changeUpdate={changeUpdate} />,
      <UserForm2 {...formData} changeUpdate={changeUpdate} />,
    ]);

  const modalToggle = () => {
    setModal(!modal);
    console.log(modal);
  };

  function formSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLast && currentPage === 0) {
      return nextPage;
    } else {
      alert("test alert");
    }
  }

  return (
    <>
      <button onClick={modalToggle} className="replace">
        modal test
      </button>
      <hr />
      <form onSubmit={formSubmit}>
        {currentPage + 1}/{pages.length}
        {page}
        {!isFirst && (
          <button type="button" onClick={backPage}>
            Back
          </button>
        )}
        <button type="submit" onClick={nextPage}>
          {isLast ? "Submit" : "Next"}
        </button>
      </form>
    </>
  );
}
