import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full h-full">
      <form>
        {/* input area */}
        <div className=" w-full grid md:grid-cols-2">
          <div className="w-full md:w-[85%] h-24">
            <label className="text-xs font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name..."
              className="w-full outline-none border border-[#4a4848] p-2 rounded-xl mt-2"
            />
          </div>
          <div className="w-full md:w-[85%] h-24">
            <label className="text-xs font-medium">Subject</label>
            <input
              type="text"
              placeholder="Enter subject..."
              className="w-full outline-none border border-[#4a4848] p-2 rounded-xl mt-2"
            />
          </div>
          <div className="w-full md:w-[85%] h-24">
            <label className="text-xs font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Your email address..."
              className="w-full outline-none border border-[#4a4848] p-2 rounded-xl mt-2"
            />
          </div>
          <div className="w-full md:w-[85%] h-24">
            <label className="text-xs font-medium">ENQUIRY TYPE</label>
            <select className="w-full outline-none border border-[#4a4848] p-2 rounded-xl mt-2">
              <option value="">Advertising</option>
            </select>
          </div>
        </div>
        {/* message area */}
        <div className="w-full md:w-[85%] md:h-52">
          <label className="text-xs font-medium">Message</label>
          <textarea name="" id="" rows={4}  cols={50} className="w-full outline-none border border-[#4a4848] p-2 rounded-xl mt-2"/>
        </div>
        <button type="submit" className="bg-black text-white rounded-xl w-40 h-14 mt-2 md:mt-0 ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
