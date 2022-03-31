import React, { useRef } from 'react'
import './Contact.css'
import emailjs from "emailjs-com";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri"

const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_worwh5h",
      "template_nsxr57j",
      form.current,
      "dehMJSyCL0a-_q8jr"
  )
    e.target.reset()
  };
  

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <a href="mailto:prashantkr006@gmail.com">send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <a href="https://m.me/ironmannext" target="__blank">
              send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+919110956564"
              target="__blank"
            >
              send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="full name" required />
          <input type="email" name="email" placeholder="your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact