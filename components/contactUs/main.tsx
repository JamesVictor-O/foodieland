import React from "react";
import ContactForm from "./form";

const Main = () => {
  return (
    <div className="w-full ">
      <h2 className="w-full text-center mb-14 md:mb-20 text-3xl font-medium mt-4">Contact Us</h2>
      <div className="flex flex-row">
        <div className="hidden md:flex w-[30%] h-[472px] overflow-hidden rounded-xl bg-gradient-to-t from-[#E7FAFE] to-[#f5f7f8]">
          <img src="assets/Layer 1 1.png" alt="" />
        </div>
        <div className="w-full md:w-[70%] h-[576px] md:ml-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Main;
