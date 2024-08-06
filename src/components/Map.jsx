import React, { useContext, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { LangContext } from '../context/LangContext';

const Map = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_m22jqvk", "template_kba4lvm", form.current, 'x2iYBk0BRxVcgTPvy')
      .then(
        () => {
          console.log('SUCCESS!');
          swal("Message send", "", "success");
          setTimeout(() => {
          }, 2000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const [lang,setLang] = useContext(LangContext)
  return (
    <div className='map-box'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39733.11475142238!2d-0.127758!3d51.507351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604aca207bc87%3A0x3a1d3501a9af5fde!2sSt.%20Paul's%20Cathedral!5e0!3m2!1sen!2sus!4v1722228681580!5m2!1sen!2sus"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="contactform-box">
        <div className="contact-text">
          <h5>{lang==="EN"?"PLEASE ELABORATE ON YOUR NEEDS":"EHTİYACLARINIZ HAQQINDA ƏTRAFLI MƏLUMAT EDİN"}</h5>
          <h1>{lang==="EN"?"Please Use This Form For Any General Queries & Concerns.":"İstənilən Ümumi Sorğu və Narahatlıq üçün Bu Formadan İstifadə Edin."}</h1>
          <form   className='contactform mt-5' ref={form} onSubmit={sendEmail}>
            <input className='contact-input' type="text" placeholder={lang==="EN"?"Your name":"Adınız"} name="user_name" /><br />
            <hr />
            <input className='contact-input' type="email" placeholder={lang==="EN"?"Your email":"Email"} name="user_email" /><br />
            <hr />
            <textarea className='contact-input' name="message" cols="22" rows="5" placeholder={lang==="EN"?"Message":"Mesaj"}></textarea><br />
            <button type='submit' value="Send" className='mt-4 contact-message'>{lang==="EN"?"Send Message":"Mesajı göndər"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Map;
