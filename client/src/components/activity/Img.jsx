import React, { useState } from "react";

const Img = ({ question, content, mainDesc }) => {
  const [value, setValue] = useState("");

  return (
    <>
      {content.id === question && (
        <div className="mx-10 my-4 p-10 shadow-lg rounded-2xl bg-white">
          <div className="flex flex-col gap-2">
            <h1 className="-mb-1 text-custL">
              Read the task carefully and answer the questions:
            </h1>
            <h1 className="mb-4 text-custY text-lg italic font-medium">
              {mainDesc}
            </h1>
            <h1 className="text-custV text-2xl font-semibold">{content.id}</h1>
            <h1 className="text-xl">{content.desc}</h1>
          </div>
          <div
            className="basis-1/2 w-full my-4 px-10 flex justify-between gap-20"
            // onChange={updateOption}
          >
            <button className="w-28 px-3 py-2 rounded-lg shadow-md bg-white">
              Upload Image
            </button>
            <img
              src={content.img}
              alt=""
              className=" basis-2/5 w-10 object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Img;
