import React from 'react'
import './Header_2.css'
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import { Link } from "react-router-dom";

function Header_2() {
  return (
    <div className="header_2">
      <span className="header_option2">ALL</span>
      <span className="header_option2">
        <MaleIcon />
        Men
      </span>
      <span className="header_option2">
        <FemaleIcon />
        Women
      </span>
      <Link to ="/checkout">

      <span className="header_option2">
        <ChildCareIcon />Kids</span>
      </Link>
      <span className="header_option2">Accessories</span>
    </div>
  );
}

export default Header_2