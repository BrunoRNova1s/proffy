import React, { FC } from "react";
import { Link } from "react-router-dom";

import "./style.css";
import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <div className="page-header">
      <div className="top-bar-container">
        <Link to='/'>
          <img src={backIcon} alt="back" />
        </Link>
        <img src={logoImg} alt="proffy" />
      </div>
      <div className="header-content">
        <strong>{props.title}</strong>
      </div>
    </div>
  );
}

export default PageHeader;
