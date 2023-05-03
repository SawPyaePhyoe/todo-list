import React, { useState } from "react";

const EditInput = (props) => {
  const [inputState, setinputState] = useState(props.value);

  return (
    <>
      <input
        autoFocus
        {...props}
        value={inputState}
        onChange={(e) => {
          setinputState(e.target.value);
          props.setedit({ ...props.edit, [props.name]: e.target.value });
        }}
      />
    </>
  );
};

export default EditInput;
