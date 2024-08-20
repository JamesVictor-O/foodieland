import React from "react";

const Printer = () => {
  return (
    <main className="flex flex-row items-center">
      <div className="w-20 h-20 flex flex-col items-center ">
        {/* print */}
        <div className="w-12 h-12 rounded-full bg-[#E7FAFE] flex justify-center align-middle items-center">
          <img
            src="assets/printer.svg"
            alt="print image"
            className="object-center w-6 h-6"
          />
        </div>
        <h3 className="font-medium text-xs mt-2">Print</h3>
      </div>

      {/* share */}
      <div className="w-20 h-20 flex flex-col items-center ">
        <div className="w-12 h-12 rounded-full bg-[#E7FAFE] flex justify-center align-middle items-center">
          <img
            src="assets/share.svg"
            alt="print image"
            className="object-center w-6 h-6"
          />
        </div>
        <h3 className="font-medium text-xs mt-2">Share</h3>
      </div>
    </main>
  );
};

export default Printer;
