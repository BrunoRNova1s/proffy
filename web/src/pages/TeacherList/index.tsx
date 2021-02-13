import React from "react";
import TeacherItem from '../../components/TeacherItem'

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import "./style.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="This are the available profs">
        <form id="search-teachers">
          <Input name="subject" label="Subject" />
          <Input name="week_day" label="week_day" />
          <Input type="time" name="time" label="Time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
