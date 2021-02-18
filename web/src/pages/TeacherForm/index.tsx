import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import "./styles.css";
import Input from "../../components/Input";

import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { weed_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { weed_day: 0, from: "", to: "" }]);
  }

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

        <fieldset>
          <legend>
            Schedule available
            <button type="button" onClick={addNewScheduleItem}>
              + New Schedule
            </button>
          </legend>
          {scheduleItems.map((scheduleItem) => {
            return (
              <div key={scheduleItem.weed_day} className="schedule-item">
                <Select
                  name="week_day"
                  label="Week day"
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
                <Input type="time" name="from" label="from" />
                <Input type="time" name="to" label="to" />
              </div>
            );
          })}
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
