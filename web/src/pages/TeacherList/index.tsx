import React from "react";
import { Link } from "react-router-dom";

import PageHeader from "../../components/PageHeader";

import './style.css'

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
        <PageHeader title='This are the available profs' />

    </div>
  );
}

export default TeacherList;
