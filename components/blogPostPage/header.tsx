import React from "react";

const PostPageHeader = () => {
  return (
    <div className="w-full h-64 bg-white flex flex-col justify-center align-middle items-center">
      <h2 className="w-[100%] text-center font-semibold text-3xl md:text-6xl ">
        Full Guide to Becoming a Professional Chef
      </h2>
      <div className="mt-2  md:mt-7 flex flex-row items-center">
        <div className="w-36 h-8 md:h-10 flex flex-row items-center">
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <img
              src="/homepage/Untitled design.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xs md:text-sm font-bold ml-2">James Victor</h3>
        </div>
        <div>
          <h3 className="text-xs md:text-sm font-medium md:ml-4">
            12 November 2021
          </h3>
        </div>
      </div>

      {/* write up */}
      <p className="w-full md:w-[80%] mt-5 text-center text-sm md:text-base md:leading-7 font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
        ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
        sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
      </p>
    </div>
  );
};

export default PostPageHeader;
