import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = () => {
    // e.preventDefault();

    emailjs.sendForm('service_t6oes6q', 'template_o4zpofa', form.current, 'BVXg77VIQHxDrfLt6')
      .then((result) => {
        console.log(result.text);
        console.log('Message sent');
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <div className="container mt-5">
        <h1 className='text-primary text-center'>Subscribe to our News letter</h1>
        <form ref={form} onSubmit={sendEmail} className="w-50 m-auto">
          <div class="mb-3">
            <label for="nameinput" class="form-label text-left fs-3 fw-bold">Your Name</label>
            <input type="text" class="form-control" id="nameinput" placeholder="your name" />
          </div>
          <div class="mb-3">
            <label for="emailinput" class="form-label text-left fs-3 fw-bold">Email address</label>
            <input type="email" class="form-control" id="emailinput" placeholder="abc@info.com" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label text-left fs-3 fw-bold">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button class="w-50 btn btn-primary text-left fs-3 fw-bold" type="submit" value="send">Send</button>
          <p class="mt-5 mb-3 text-muted">© Alumytech.</p>
        </form>
      </div>
    </>
  );
};
export default Contact;



/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */