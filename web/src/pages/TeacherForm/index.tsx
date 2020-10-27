import React from "react";
import PageHeader from "../../components/PageHeader";
import "./styles.css";

function TeacherForm() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader
        title="You want to teach, amazing!"
        description="the first step is to fill out the form"
      />

      <main>
        <fieldset>
          <legend>Your data</legend>

          <div className="input-block">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>

          <div className="input-block">
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id="avatar" />
          </div>
          <div className="input-block">
            <label htmlFor="Whatsapp">Whatsapp</label>
            <input type="text" id="Whatsapp" />
          </div>
        </fieldset>
      </main>
    </div>
  );
}

export default TeacherForm;
