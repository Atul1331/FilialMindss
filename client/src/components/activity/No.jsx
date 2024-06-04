import React, { useState } from "react";
import { InputNumber } from "antd";

const No = ({ question, content, mainDesc }) => {
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
            <InputNumber
              min={1}
              max={1000}
              placeholder="Enter Number"
              size="large"
              value={value}
              onChange={setValue}
              className="h-fit w-48 mt-10 text-lg bg-white border-2 border-grey-300 hover:border-white focus:bg-white focus:border-yellow-400"
              //   defaultValue={3}
              //   onChange={onChange}
            />
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

export default No;
