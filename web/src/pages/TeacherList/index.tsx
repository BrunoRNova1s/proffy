import React from "react";
import TeacherItem from '../../components/TeacherItem'

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";

import "./style.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="This are the available profs">
        <form id="search-teachers">
        <Select
            name="subject"
            label="Subject"
            options={[
              { value: "Art", label: "art" },
              { value: "Art1", label: "art1" },
              { value: "Art2", label: "art2" },
              { value: "Art3", label: "art3" },
              { value: "Art4", label: "art4" },
            ]}
          ></Select>
          <Select
            name="week_day"
            label="week_day"
            options={[
              { value: "0", label: "Sunday" },
              { value: "1", label: "Monday" },
              { value: "2", label: "Tuesday" },
              { value: "3", label: "Wednesday" },
              { value: "4", label: "Thursday" },
              { value: "5", label: "Friday" },
              { value: "6", label: "Saturday" },
            ]}
          ></Select>
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
