type page1Data = {
  firstName: string;
  lastName: string;
  dateBirth: string;
};

type UserForm1Props = page1Data & {
  changeUpdate: (fields: Partial<page1Data>) => void;
};

export function UserForm1({
  firstName,
  lastName,
  dateBirth,
  changeUpdate,
}: UserForm1Props) {
  return (
    <>
      <label className="forminputsec">
        First Name:
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstName"
          onChange={(e) => changeUpdate({ firstName: e.target.value })}
          value={firstName}
          required
        />
      </label>

      <label className="forminputsec">
        Last Name:
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastName"
          onChange={(e) => changeUpdate({ lastName: e.target.value })}
          value={lastName}
          required
        />
      </label>

      <label className="forminputsec">
        Date of Birth:
        <input
          type="date"
          name="dateBirth"
          onChange={(e) => changeUpdate({ dateBirth: e.target.value })}
          value={dateBirth}
          required
        />
      </label>
    </>
  );
}
