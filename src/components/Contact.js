import {useRef} from "react";
import emailjs from '@emailjs/browser';

import "../styles/contact.css";

export default function Contact() {
const form = useRef()

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_f868svh', 'template_9rvag25', form.current, 'Vh2AwoXo9qxKJ979u')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

  return (
    <section>
      <div className="container">
        <h2 className="--text-center">Contact</h2>
        <form ref={form}  onSubmit={sendEmail} className="--form-control --card --flex-center --dir-column">
          <input type="text" placeholder="Full Name" name="user_name" required/>
          <input type="email" placeholder="Email" name="user_email" required/>
          <input type="text" placeholder="Subject" name="message_subject" required/>
          <textarea name="message" cols={30} rows={10}></textarea>
          <button type="submit" className="--btn --btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}
