import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  formDiv
} from "./layout.module.css";

export const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("gmail", "my_email_id", e.target, "2_v9Zf9uTf5P8bmGG")
      .then((result) => { console.log(result.json()) },
        (error) => { console.log(error.json()) }
      );
      e.target.reset();
      setTimeout(() => {
        alert("Thanks, your message is received. We will get back to you ASAP");
      }, 500);
  };

  return (
    <form className={formDiv} ref={form} onSubmit={sendEmail}>
      <label>Subject</label>
      <input type="text" required name="subject" />
      <label>Name</label>
      <input type="text" required name="name" />
      <label>Email Address</label>
      <input type="email" required name="email" />
      <label>Your Message</label>
      <textarea rows="6" required name="message" />
      <input style={{cursor: "pointer"}} type="submit" value="Send" />
    </form>
  );
};

export default EmailForm;
