import React from "react";

const Content = () => {
  return (
    <div className="mt-4 w-full">
      {/* image  */}
      <div className="w-full h-52 md:h-[600px] overflow-hidden rounded-xl">
        <img
          src="/assets/image 29.png"
          alt=""
          className="w-full h-full md:object-cover"
        />
      </div>

      {/* articles */}

      <div className="w-full p-4 md:p-10 md:flex flex-row">
        {/* write ups */}
        <div className="w-full md:w-[70%]">
          {/* first */}
          <div className="w-full mb-5">
            <h2 className="font-semibold  text-base md:text-2xl">
              How did you start out in the food industry?
            </h2>
            <p className="text-left font-normal text-sm md:text-base mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
          </div>
          {/* second*/}
          <div className="w-full mb-5">
            <h2 className="font-semibold  text-base md:text-2xl">
              What do you like most about your job?
            </h2>
            <p className="text-left font-normal text-sm md:text-base mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
          </div>
          {/* second*/}
          <div className="w-full mb-5">
            <h2 className="font-semibold  text-base md:text-2xl">
              Do you cook at home on your days off?
            </h2>
            <div className="w-full h-52 md:h-[400px] overflow-hidden my-8 rounded-lg">
              <img
                src="/assets/Rectangle 23.png"
                alt="image of food"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-left font-normal text-sm md:text-base mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
          </div>
          {/* fourth*/}
          <div className="w-full mb-5">
            <h2 className="font-semibold  text-base md:text-2xl">
              What would your advice be to young people looking to get their
              foot in the door?
            </h2>
            <p className="text-left font-normal text-sm md:text-base mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
          </div>

          {/* hightlight */}
          <div className="w-full p-5 bg-[#eaeff2] rounded-xl mb-5">
            <p className="font-semibold md:font-medium md:text-4xl">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ac ultrices odio.”
            </p>
          </div>

          {/* fifth */}
          <div className="w-full mb-5">
            <h2 className="font-semibold  text-base md:text-2xl">
              What is the biggest misconception that people have about being a
              professional chef?
            </h2>
            <p className="text-left font-normal text-sm md:text-base mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
          </div>
        </div>

        {/* share icons */}

        <div className="hidden w-[20%] h-52 ml-44 md:flex flex-col items-center">
          <h2>SHARE THIS ON:</h2>
          <div className="mt-6">
            <div className="flex flex-col items-center">
              <div className="mb-3">
                <img src="/assets/001-facebook.svg" alt="facebook logo" />
              </div>
              <div className="mb-4">
                <img src="/assets/003-twitter.svg" alt="twitter logo" />
              </div>
              <div className="">
                <img src="/assets/004-instagram.svg" alt="instagram logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
