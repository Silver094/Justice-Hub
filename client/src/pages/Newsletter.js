import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import img3 from '../images/news_letter_bg.jpg'

const Newsletter = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_phemh6d', 'template_pmtjbcr', form.current, 'l_itmXkxU-OU91hkC')
      .then((result) => {
        alert('You have successfully subscribed to our newsletter.');
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <div>
        <img src={img3} className="bg" alt="..." />
      </div>
      <div className='texxt1'>Subscribe To Newsletter</div>
      <div className='texxt2'>Discover the latest laws and rules on the daily basis via the email<br />Our Newsletter provides you with the rights every human can claim.</div>
      <div >
        <form ref={form} onSubmit={sendEmail}>
          <input className='inputtext1' name="name" type="text" placeholder='Enter the name' />
          <input className='inputtext2' name="email" type="text" placeholder='Enter a valid email address' />
          <button className='submitbut' type='submit'> Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter