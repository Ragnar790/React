import React, { useState } from "react";
import { Button } from "react-bootstrap";

const FnComp = () => {
  let [val, setVal] = useState('Red');
  let changeVal = () => {
    setVal(val == 'Red' ? 'Green' : 'Red')
  }
  return (
    <div className="m-4 text-center">

      <h1>State : {val}</h1>
      <Button onClick={changeVal} variant="success">Change State</Button>
    </div>
  )
}

export default FnComp