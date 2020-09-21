import React from "react";

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import "./style.css";

function TeacherItem() {
  return (
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
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
        <br />
        When an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
      </p>

      <footer>
        <p>
          Price/hour
          <strong>100 €</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="contact" />
          Contact
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem