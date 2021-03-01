import React, { useState } from "react";
import { FormEvent } from "react";

import TeacherItem from "../../components/TeacherItem";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

import "./style.css";

function TeacherList() {
  const [subject, setSubject] = useState("");
  const [weak_day, setWeakDay] = useState("");
  const [time, setTime] = useState("");

  function searchTeachers(e: FormEvent) {
    e.preventDefault();

    api
      .post("classes", {
        subject,
        weak_day,
        time
      })
      .then(() => {
        alert("Success");

      })
      .catch(() => {
        alert("Error BD");
      });
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="This are the available profs">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { value: "Art", label: "art" },
              { value: "Art1", label: "art1" },
              { value: "Art2", label: "art2" },
              { value: "Art3", label: "art3" },
              { value: "Art4", label: "art4" },
            ]}
          ></Select>
          <Select
            name="weak_day"
            label="weak_day"
            value={weak_day}
            onChange={(e) => {
              setWeakDay(e.target.value);
            }}
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
          <Input
            type="time"
            name="time"
            label="Time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
              searchTeachers(e);
            }}
          />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
