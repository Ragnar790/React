import React, { useState } from "react";

const Controlled = () => {
  let [value, setValue] = useState("");
  let changeValue = e => {
    setValue(e.target.value)
  }

  return (
    <div className="text-center m-4">
      <h5 className="border m-4 p-4">In a controlled component, the value of the input element is controlled by React. 
        We store the state of the input element inside the code, and by using event-based callbacks, any changes made to the input element will be reflected in the code as well.
        When a user enters data inside the input element of a controlled component, onChange function gets triggered and inside the code, we check whether the value entered is valid or invalid. 
        If the value is valid, we change the state and re-render the input element with the new value.
      </h5>
      <form>
        <input type="text" value={value} onChange={changeValue} />
      </form>
      <h1 className="mt-4">Input : {value}</h1>
    </div>
  )
}

export default Controlled