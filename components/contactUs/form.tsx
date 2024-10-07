"use client"

import { useState } from "react";
import { json } from "stream/consumers";

interface formDataProps{
    firstName:string,
    emailAddress: string,
    subject_Matter: string,
    message:string
}

const ContactForm = () => {

  const initialForm:formDataProps={
    firstName: "",
    emailAddress: "",
    subject_Matter: "",
    message:""
  }
  const [formData, setFormData] = useState<formDataProps>(initialForm)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:value
    }))

    
  }
  const HandleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch(error => console.error('Error:', error));
    setFormData(initialForm)
   }
  return (
    <div className="w-full h-full">
      <form onSubmit={HandleSubmit}>
        {/* input area */}
        <div className=" w-full grid md:grid-cols-2">
          <div className="w-full md:w-[85%] h-24">
            <label className="text-xs font-medium">Name</label>
            <input
              onChange={handleChange}
              value={formData.firstName}
              name="firstName"
              required
              type="text"
              placeholder="Enter your name..."
              className="w-full outline-none border border-[#4a4848] p-2 rounded-xl mt-2"
            />
          </div>
          <div className="w-full md:w-[85%] h-24">
            <label className="text-xs font-medium">Subject</label>
            <input
              value={formData.subject_Matter}
              onChange={handleChange}
              name="subject_Matter"
              type="text"
              placeholder="Enter subject..."
              className="w-full outline-none border border-[#4a4848] p-2 rounded-xl mt-2"
            />
          </div>
          <div className="w-full md:w-[85%] h-24">
            <label className="text-xs font-medium">Email Address</label>
            <input
              value={formData.emailAddress}
              required
              name="emailAddress"
              type="email"
              onChange={handleChange}
              placeholder="Your email address..."
              className="w-full outline-none border border-[#4a4848] p-2 rounded-xl mt-2"
            />
          </div>
          <div className="w-full md:w-[85%] h-24">
            <label className="text-xs font-medium">ENQUIRY TYPE</label>
            <select className="w-full outline-none border border-[#4a4848] p-2 rounded-xl mt-2">
              <option value="Advertising">Advertising</option>
            </select>
          </div>
        </div>
        {/* message area */}
        <div className="w-full md:w-[85%] md:h-52">
          <label className="text-xs font-medium">Message</label>
          <textarea name="message" value={formData.message} id="" rows={4}  cols={50} onChange={handleChange} className="w-full outline-none border border-[#4a4848] p-2 rounded-xl mt-2"/>
        </div>
        <button type="submit" className="bg-black text-white rounded-xl w-40 h-14 mt-2 md:mt-0 ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
