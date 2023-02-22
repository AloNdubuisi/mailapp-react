import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [to_name, setTo_Name] = useState('')
  const [from_name, setFrom_Name] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(to_name, from_name, message);

    const mailDetails = {
      to_name:to_name,
      from_name:from_name,
      message:message,
    };
    emailjs.sendForm('service_t6oes6q', 'template_o4zpofa', mailDetails, 'BVXg77VIQHxDrfLt6')
      .then((result) => {
        console.log('Message sent successfully:', result.text);
      })
      .catch((error) => {
        console.log('Message failed to send:', error.text);
      });

    // reset form fields
    setTo_Name('');
    setFrom_Name('');
    setMessage('');
  }

  return (
    <div className="container mt-5">
      <h1 className='text-primary text-center'>Subscribe to our Newsletter</h1>
      <form onSubmit={sendEmail} className="w-75 m-auto">
        <div className="mb-3">
          <label htmlFor="nameinput" className="form-label text-left fs-4 fw-bold">Your Name</label>
          <input
            type="text"
            className="form-control h-100 fs-4"
            id="nameinput"
            placeholder="Your Name"
            value={to_name}
            onChange={(event) => setTo_Name(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailinput" className="form-label text-left fs-4 fw-bold">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emailinput"
            placeholder="abc@info.com"
            value={from_name}
            onChange={(event) => setFrom_Name(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label text-left fs-4 fw-bold">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            placeholder="Your message here..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div className='text-center'>
          <button className="w-25 btn btn-primary fs-3 fw-bold" type="submit" value="send">Send</button>
        </div>
        <p className="mt-5 mb-3 text-muted">© Alumytech.</p>
      </form>
    </div>
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


    // ===========//
/*
 // const form = useRef();
const [to_name, setTo_Name] = useState('')
const [from_name, setFrom_Name] = useState('')
const [message, setMessage] = useState('')

const sendEmail = (e) => {
e.preventDefault();
console.log(to_name + from_name + message);

// const emailContent = {
//   to_name: to_name,
//   from_name: from_name,
//   message: message,
// };
emailjs.sendForm('service_t6oes6q', 'template_o4zpofa', 'BVXg77VIQHxDrfLt6')
  .then((result) => {
    // console.log(result.text);
    // console.log('Message sent');
  }, (error) => {
    console.log(error.text);
  });
};
return (
<>
  <div className="container mt-5">
    <h1 className='text-primary text-center'>Subscribe to our News letter</h1>
    <form onSubmit={sendEmail} className="w-75 m-auto">
      <div class="mb-3">
        <label htmlFor="nameinput" className="form-label text-left fs-4 fw-bold">Your Name</label>
        <input type="text" className="form-control h-100 fs-4" id="nameinput" placeholder="your name"
        onChange={(event)=>{setTo_Name(event.target.value)}}/>
      </div>
      <div class="mb-3">
        <label htmlFor="emailinput" className="form-label text-left fs-4 fw-bold">Email address</label>
        <input type="email" className="form-control" id="emailinput" placeholder="abc@info.com" 
        onChange={(event)=>{setFrom_Name(event.target.value)}} />
      </div>
      <div class="mb-3">
        <label htmlFor="messahe" className="form-label text-left fs-4 fw-bold">Message</label>
        <textarea className="form-control" id="message" rows="5" placeholder='your message here...'
        onChange={(event)=>{setMessage(event.target.value)}}></textarea>
      </div>
      <div className='text-center'>
        <button className="w-25 btn btn-primary fs-3 fw-bold" type="submit" value="send">Send</button>
      </div>
      <p className="mt-5 mb-3 text-muted">© Alumytech.</p>
    </form>
  </div>
</>
);
*/