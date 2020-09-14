import React from "react";
import { Link } from "react-router-dom";

import './style.css'
import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <div className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="back" />
          </Link>
          <img src={logoImg} alt="proffy" />
        </div>
        <div className="header-content">
          <strong>This are the available profs</strong>
        </div>
      </div>
    </div>
  );
}

export default TeacherList;
