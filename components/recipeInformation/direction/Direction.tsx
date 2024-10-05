import React from "react";

const Direction = ({direction}:{direction:string}) => {
  const steps=direction.split(".")
  // const steps = () => {
  //   let steps = [];
  // };
  return (
    <div className="w-full md:w-[60%] mt-10">
      <h2 className="w-40 h-11 font-semibold text-4xl">Directions</h2>
      {/* directives */}
      <div>
        {/* directive */}
        {steps.map((step,index) => (
          <div key={index} className="flex flex-row items-baseline border-b-2 py-4 px-2 md:px-0">
          <div className="ml-4">
            <p className="w-full text-left text-sm">
              {step}
            </p>
          </div>
        </div>
       ))}
      </div>
    </div>
  );
};

export default Direction;
