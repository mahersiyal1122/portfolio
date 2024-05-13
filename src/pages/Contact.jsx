import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import Line from '../components/Line';


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // 57f5dc61-b6c8-4ee2-bdc2-dac178a46764
    formData.append("access_key", "add access key");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success");
    }
  };
  return (
    <div className='my-14 max-[780px]:my-4 max-[530px]:px-4'>
      <h2 className='text-[max(3.2vw,32px)] font-semibold text-center mb-5 max-[780px]:mb-2'>Get in Touch</h2>
      <p className='text-lg text-center w-[90%] mx-auto max-[780px]:text-base max-[530px]:text-sm'>Get in touch! Whether it's about a project, collaboration, or just saying hello, I'm here to connect. Reach out using the contact information below, and let's start a conversation</p>
      <div className='my-16 mb-32 flex items-center mx-14 gap-3 max-[1090px]:mx-0 max-[780px]:flex-col-reverse max-[780px]:gap-10 max-[780px]:my-10'>
        <div className='flex w-1/2 flex-col gap-10 max-[780px]:w-full max-[780px]:gap-5'>
          <div className='flex gap-4'>
            <div className='mt-1'><MdLocationOn className='bg-white text-black w-11 h-11 p-[10px] rounded-[50%] hover:text-white hover:bg-[#db2777] cursor-pointer transition-all' /></div>
            <div className='flex flex-col'>
              <span className='font-semibold text-[#f44545] text-lg max-[530px]:text-base'>Address</span>
              <span className='max-[530px]:text-sm'>Muzaffargarh (43200), Punjab, Pakistan</span>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='mt-1'><MdCall className='bg-white text-black w-11 h-11 p-[10px] rounded-[50%] hover:text-white hover:bg-[#db2777] cursor-pointer transition-all' /></div>
            <div className='flex flex-col'>
              <span className='font-semibold text-[#f44545] text-lg max-[530px]:text-base'>Phone</span>
              <span className='max-[530px]:text-sm'>+923277169982</span>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='mt-1'><MdAlternateEmail className='bg-white text-black w-11 h-11 p-[10px] rounded-[50%] hover:text-white hover:bg-[#db2777] cursor-pointer transition-all' /></div>
            <div className='flex flex-col'>
              <span className='font-semibold text-[#f44545] text-lg max-[530px]:text-base'>Email</span>
              <span className='max-[530px]:text-sm'>zsikander181@gmail.com</span>
            </div>
          </div>
        </div>
        <div className='flex w-1/2 justify-center max-[780px]:w-full max-[780px]:justify-start'>
          <div className='bg-[#0d1224] border border-[#3b415f] rounded-xl w-[500px] py-6 px-10 max-[1100px]:w-[400px] max-[780px]:w-full max-[530px]:px-4 max-[530px]:pt-5 max-[530px]:pb-10 max-[530px]:rounded-lg'>
            <h3 className='text-3xl font-medium text-[#14ffa9] mb-4 max-[780px]:text-2xl max-[530px]:text-xl max-[530px]:mb-3'>Send Message</h3>
            <form onSubmit={onSubmit} className='contact flex flex-col' action="">
                <p>Your Name:</p>
                <input name='name' type="text" required/>
                <p>Your Email:</p>
              <input name='email' type="email" required />
              <p>Your Message:</p>
              <textarea name='message' cols="60" rows="3" required/>
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
      <Line />
    </div>
  )
}

export default Contact
