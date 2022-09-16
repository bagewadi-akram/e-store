import React from "react";
import "./Header_2.css";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import { Link } from "react-router-dom";

function Header_2() {
  return (
    <div className="header_2">
      <Link style={{ textDecoration: "none" }} to="/Categories">
        <span className="header_option2">ALL</span>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/Categories">
        <span className="header_option2">
          <MaleIcon />
          Men
        </span>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/Categories">
        <span className="header_option2">
          <FemaleIcon />
          Women
        </span>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/Categories">
        <span className="header_option2">
          <ChildCareIcon />
          Kids
        </span>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/Categories">
        <span className="header_option2">Accessories</span>
      </Link>
    </div>
  );
}

export default Header_2;
