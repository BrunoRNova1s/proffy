import React from "react";

import PageHeader from "../../components/PageHeader";

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import "./style.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="This are the available profs">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Week Day</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Time</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars3.githubusercontent.com/u/11559401?s=460&u=d57149fdb4d77d0e60bc79017a784ef9dc382fe1&v=4"
              alt="Me"
            />
            <div>
              <strong>Bruno Novais</strong>
              <span>Math</span>
            </div>
          </header>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
            <br/>
             When an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </p>

          <footer>
            <p>
              Price/hour
              <strong>100 €</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="contact"/>
              Contact
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default TeacherList;
