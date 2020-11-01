import { addTab } from "context/actions";
import AppContext from "context/appContext";
import React, { useContext } from "react";
// import { BsPlusSquareFill } from "react-icons/bs";

let counter = 1;

const AddTabButton = () => {
  const { appDispatch } = useContext(AppContext);

  return (
    <button
      onClick={() => {
        console.log(counter);

        appDispatch(addTab(`Tab${counter++}`));
      }}>
      {/* <BsPlusSquareFill /> */}
      HELLO ADD ME
    </button>
  );
};

export default AddTabButton;

// const AddTabButtonS = styled.button`
//   font-size: 2rem;
// `;
