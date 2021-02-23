import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import "./styles.css";
import Input from "../../components/Input";

import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import { FormEvent } from "react";

function TeacherForm() {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { weed_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { weed_day: 0, from: "", to: "" }]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    console.log({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
    });
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const newArray = scheduleItems.map((scheduleItem, index) => {
      if(index === position) {
        return { ...scheduleItem, [field]: value}
      }

      return scheduleItem
    })

    console.log(newArray)
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="You want to teach, amazing!"
        description="the first step is to fill out the form"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Your data</legend>
            <Input
              name="name"
              label="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
            <Textarea
              name="bio"
              label="Biography"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>About Class</legend>
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
            <Input
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
              name="cost"
              label="Cost Class"
            />
          </fieldset>

          <fieldset>
            <legend>
              Schedule available
              <button type="button" onClick={addNewScheduleItem}>
                + New Schedule
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.weed_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Week day"
                    onChange={(e) => {
                      setScheduleItemValue(index, "week_day", e.target.value);
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
            <button type="submit">Save</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
