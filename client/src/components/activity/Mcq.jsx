import React from "react";
import { useState } from "react";

const Mcq = ({ question, content, mainDesc }) => {
  const [option, setOption] = useState("");
  const updateOption = (e) => {
    setOption(e.target.value);
    console.log(e.target.value);
  };
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
            className="basis-1/2 w-full my-4 px-10 flex justify-between gap-4"
            onChange={updateOption}
          >
            <div className="flex flex-col mt-10 gap-4 text-black">
              {content.opt.map((opt) => (
                <div className="relative rounded-lg w-fit">
                  <input
                    className="absolute m-0 h-full w-full z-10 opacity-0 cursor-pointer peer"
                    type="radio"
                    value={opt.opt}
                    name="option"
                    checked={option === opt.opt}
                  />
                  <div className="flex justify-evenly gap-2 rounded-lg bg-gray-300 peer-checked:bg-yellow-500">
                    <h1 className="text-lg ml-3 my-2 bg-white text-black px-2 rounded-md">
                      {opt.no}
                    </h1>
                    <h1 className="text-lg mr-3 my-2">{opt.opt}</h1>
                  </div>
                </div>
              ))}
            </div>

            <img
              src={content.img}
              alt=""
              className=" basis-1/2 w-10 object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Mcq;
