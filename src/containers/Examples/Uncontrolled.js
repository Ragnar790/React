
import React, { useState } from "react";

const Uncontrolled = () => {
  let inputValue = React.createRef();
  let handleSubmit = e => {
    alert(`Input value: ${inputValue.current.value}`);
    e.preventDefault();
  }

  return (
    <div className="text-center">
      <h5 className="border m-4 p-4">In an uncontrolled component, the value of the input element is handled by the DOM itself. Input elements inside uncontrolled components work just like normal HTML input form elements.
        The state of the input element is handled by the DOM. Whenever the value of the input element is changed, event-based callbacks are not called. Basically, react does not perform any action when there are changes made to the input element.
      </h5>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputValue} />
        <button type="submit">Submit</button>
      </form>
      <h1 className="mt-4"></h1>
    </div>
  )
}

export default Uncontrolled