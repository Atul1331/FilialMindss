import { Rate } from "antd";
import React, { useState } from "react";
const Rating = ({ question, content, mainDesc }) => {
  const [value, setValue] = useState(0);
  const desc = ["Terrible", "Bad", "Normal", "Good", "Great"];

  return (
    content?.id === question && (
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
        {console.log(content.img)}
        <div className="basis-1/2 w-full my-4 px-10 flex justify-between gap-20">
          <div className="flex flex-col gap-4 items-center">
            <Rate
              tooltips={desc}
              onChange={setValue}
              value={value}
              className="h-fit mt-10"
            />
            {value ? <span>{desc[value - 1]}</span> : null}
          </div>
          <img
            src={content.img}
            alt=""
            className=" basis-2/5 w-10 object-cover"
          />
        </div>
      </div>
    )
  );
};

export default Rating;
