import React from "react";

const Direction = () => {
  return (
    <div className="w-full md:w-[60%] mt-10">
      <h2 className="w-40 h-11 font-semibold text-4xl">Direction</h2>
      {/* directives */}
      <div>
        {/* directive */}
        <div className="flex flex-row items-baseline border-b-2 py-4 px-2 md:px-0">
          <input type="radio" />
          <div className="ml-4">
            <h2 className="font-semibold text-2xl">
              1. Lorem ipsum dolor sit amet{" "}
            </h2>
            <p className="w-full text-left text-sm">
              emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
            <div className=" mt-10">
              <img src="/assets/Rectangle 23.png" alt="" />
            </div>
            <p className="w-full text-left text-sm mt-10">
              emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non.
            </p>
          </div>
        </div>
        {/* directive */}
        <div className="flex flex-row items-baseline border-b-2 py-4 px-2 md:px-0">
          <input type="radio" />
          <div className="ml-4">
            <h2 className="font-semibold text-2xl">
              3. Lorem ipsum dolor sit amet{" "}
            </h2>
            <p className="w-full text-left text-sm">
              emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
        {/* directive */}
        <div className="flex flex-row items-baseline border-b-2 py-4 px-2 md:px-0">
          <input type="radio" />
          <div className="ml-4">
            <h2 className="font-semibold text-2xl">
              2. Lorem ipsum dolor sit amet{" "}
            </h2>
            <p className="w-full text-left text-sm">
              emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Direction;
