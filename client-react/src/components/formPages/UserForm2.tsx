type page2Data = {
  languages: string;
  fundingSource: string;
};

type UserForm2Props = page2Data & {
  changeUpdate: (fields: Partial<page2Data>) => void;
};

export function UserForm2({
  languages,
  fundingSource,
  changeUpdate,
}: UserForm2Props) {
  return (
    <>
      <label className="forminputsec">
        Languages Spoken:
        <input
          type="text"
          placeholder="Enter Spoken Languages - If Multiple, Please seperate with a comma (,)"
          name="languages"
          onChange={(e) => changeUpdate({ languages: e.target.value })}
          value={languages}
          required
        />
      </label>
      <label className="optionsec forminputsec ">
        Funding Source:
        <select
          name="fundingSource"
          onChange={(e) => changeUpdate({ fundingSource: e.target.value })}
          value={fundingSource}
          required
        >
          <option value="NDIS">NDIS</option>
          <option value="HCP">HCP</option>
          <option value="CHSP">CHSP</option>
          <option value="DVA">DVP</option>
          <option value="HACC">HACC</option>
        </select>
      </label>
    </>
  );
}
