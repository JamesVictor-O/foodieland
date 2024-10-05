import React from "react";
import Image from "next/image";
import YouTube from "react-youtube";

const VisualSection = ({ mealDetails }: { mealDetails: [] }) => {
  console.log(mealDetails);
  const getVideoId = (details: any) => {
    const url = details.strYoutube;
    const videoId = url.split("v=")[1];
    return videoId;
  };

  const videoID = getVideoId(mealDetails);
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <main className=" w-full flex flex-col">
      {/* visual properties */}
      <div className="relative w-full md:h-[500px] flex flex-row">
        {/* video section */}
        <div className="relative w-full md:w-[65%] rounded-[10px] overflow-hidden">
          {/* <iframe
            src={`https://www.youtube.com/embed/${videoID}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            allowFullScreen
            title="YouTube Video"
          /> */}

          <YouTube videoId={videoID} opts={ opts} />
        </div>

        {/* nutrition section */}
        <div className="hidden md:block w-[30%] h-full rounded-3xl bg-[#E7FAFE] ml-12 p-8">
          {/* header */}
          <h2 className="w-[80%] text-2xl font-bold">Nutrition Information</h2>
          {/* containts */}
          <div className="w-full  mt-7">
            <div className="flex flex-row items-center justify-between border-b-2 pb-2 px-2 border-gray-400 mb-3">
              <span className="text-base font-normal">Calories</span>
              <span className="font-semibold text-base">219.9 kcal</span>
            </div>
            <div className="flex flex-row items-center justify-between border-b-2 pb-2 px-2 border-gray-400 mb-3">
              <span className="text-base font-normal">Total Fat</span>
              <span className="font-semibold text-base">10.7 g</span>
            </div>
            <div className="flex flex-row items-center justify-between border-b-2 pb-2 px-2 border-gray-400 mb-3">
              <span className="text-base font-normal">Protein</span>
              <span className="font-semibold text-base">7.9 g</span>
            </div>
            <div className="flex flex-row items-center justify-between border-b-2 pb-2 px-2 border-gray-400 mb-3">
              <span className="text-base font-normal">Carbohydrate</span>
              <span className="font-semibold text-base">22.2 g</span>
            </div>
            <div className="flex flex-row items-center justify-between border-b-2 pb-2 px-2 border-gray-400 mb-3">
              <span className="text-base font-normal">Cholesterol</span>
              <span className="font-semibold text-base">34.7 mg</span>
            </div>
          </div>
          {/* message */}
          <p className="w-full text-center text-base font-medium  md:mt-16">
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
      {/* message */}
      <div className="w-full md:h-20 mt-12">
        <p className="font-normal text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </main>
  );
};

export default VisualSection;
