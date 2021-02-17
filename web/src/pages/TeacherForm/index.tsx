import React from "react";
import PageHeader from "../../components/PageHeader";
import "./styles.css";
import Input from "../../components/Input";

import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="You want to teach, amazing!"
        description="the first step is to fill out the form"
      />

      <main>
        <fieldset>
          <legend>Your data</legend>
          <Input name="name" label="Name"></Input>
          <Input name="avatar" label="Avatar"></Input>
          <Input name="whatsapp" label="Whatsapp"></Input>
          <Textarea name="bio" label="Biography"></Textarea>
        </fieldset>

        <fieldset>
          <legend>About Class</legend>
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
          <Input name="cost" label="Cost Class"></Input>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="warning" />
            Warning! <br />
            Fill the data
          </p>
          <button type="button">Save</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
