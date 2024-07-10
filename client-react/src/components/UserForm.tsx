import { useState } from "react";
import { UserForm1 } from "./formPages/UserForm1";
import { UserForm2 } from "./formPages/UserForm2";
import UserFormSubmit from "./formPages/UserFormSubmit";
import "./UserForm.css";

interface baseFormData {
  firstName: string;
  lastName: string;
  dateBirth: string;
  languages: string;
  fundingSource: string;
}

export default function UserForm({}: any) {
  //Modal Toggle State
  const [modal, setModal] = useState(false);

  //Current Form Page State
  const [currPage, setPage] = useState(0);

  //State Set for FormDatas
  const [formData, setFormData] = useState<baseFormData>({
    firstName: "",
    lastName: "",
    dateBirth: "",
    languages: "",
    fundingSource: "",
  });

  function toggleModal() {
    setModal(!modal);
  }

  function nextPage() {
    setPage(currPage + 1);
  }

  function backPage() {
    setPage(currPage - 1);
  }

  //Update FormData when Text Fields Changed
  function changeUpdate(fields: Partial<baseFormData>) {
    setFormData((prevData) => ({ ...prevData, ...fields }));
  }

  //Casing for opening / closing modal box
  switch (modal) {
    case false:
      return (
        <div>
          <button onClick={toggleModal}>Modal Toggle</button>
        </div>
      );
    case true: {
      switch (currPage) {
        case 0:
          return (
            <div className="overlay">
              <div className="flexbox">
                <div className="modalbox">
                  <button onClick={toggleModal}>close</button>
                  <h1>Please Enter User Data:</h1>
                  <UserForm1
                    nextPage={nextPage}
                    changeUpdate={changeUpdate}
                    values={formData}
                  />
                </div>
              </div>
            </div>
          );
        case 1:
          return (
            <div className="overlay">
              <div className="flexbox">
                <div className="modalbox">
                  <button onClick={toggleModal}>close</button>
                  <h1>Please Enter User Data:</h1>
                  <UserForm2
                    nextPage={nextPage}
                    backPage={backPage}
                    changeUpdate={changeUpdate}
                    values={formData}
                  />
                </div>
              </div>
            </div>
          );
        case 2:
          return (
            <div className="overlay">
              <div className="flexbox">
                <div className="modalbox">
                  <UserFormSubmit values={formData} backPage={backPage} />
                </div>
              </div>
            </div>
          );
      }
    }
  }
}
