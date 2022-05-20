import React from "react";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from 'react-icons/ai';
import '../../Styles/style.css'
import { Stack } from "react-bootstrap";

const LinksToExamples = () => {
  return (
    <Stack gap={1} className="AllLinks d-flex align-items-center m-4 border">
      <div className="linkContainer"><Link className="linkToExamp" to="/controlled"><AiFillCaretRight/>Controlled Component</Link></div>
      <div className="linkContainer"><Link className="linkToExamp" to="/uncontrolled"><AiFillCaretRight/>Uncontrolled Component</Link></div>
      <div className="linkContainer"><Link className="linkToExamp" to="/stateInFnComp"><AiFillCaretRight/>State in Functional Component</Link></div>
      <div className="linkContainer"><Link className="linkToExamp" to="/stateInClsComp"><AiFillCaretRight/>State in Class Component</Link></div>
    </Stack>
  )
}

export default LinksToExamples