import React from "react";


function InputControl({ Label, ...props }) {
  return (
    <div >
      {Label && <label>{Label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputControl;
