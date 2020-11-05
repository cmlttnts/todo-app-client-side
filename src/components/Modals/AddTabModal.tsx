import { addTab } from "context/actions";
import AppContext from "context/appContext";
import React, { useContext, useState } from "react";

type Props = {
  onCancel: () => void;
};

const AddTabModal = ({ onCancel }: Props) => {
  const { appDispatch } = useContext(AppContext);
  const [tabName, setTabName] = useState<string>("");
  return (
    <div className="AddTabModal">
      <form onSubmit={e => submitTab(e)}>
        <label htmlFor="addTab">Tab Name: </label>
        <input
          type="text"
          name="addTab"
          id="addTab"
          value={tabName}
          onChange={e => {
            setTabName(e.target.value);
          }}
        />
        <button type="submit">Add</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );

  function submitTab(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    appDispatch(addTab(tabName));
    onCancel();
  }
};

export default AddTabModal;
