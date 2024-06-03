import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, DatePicker, Input, InputNumber } from "antd";

import { FcBusinessman } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";

const ChildInfo = ({ page, setPage, setInput1 }) => {
  const [gender, setGender] = useState("Male");
  const [inputValue, setInputValue] = useState(1);

  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  const updateGender = (e) => {
    setGender(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="px-12 my-10 py-10 w-fit flex flex-col gap-y-10 items-center rounded-3xl shadow-2xl shadow-black bg-white">
      <Form
        name="dynamic_form_nest_item"
        onFinish={(e) => {
          console.log("Received values of form:", e);
          setInput1(e);
          setPage(!page);
        }}
        style={{
          maxWidth: 350,
          minWidth: 350,
        }}
        autoComplete="off"
      >
        <h1 className="mb-4 text-2xl text-center">Child's Details</h1>
        <Form.Item
          label=""
          name="gender"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <div
            className="w-full my-4 flex justify-center"
            onChange={updateGender}
          >
            <div className="relative h-48 w-40 mx-10">
              <input
                className="absolute h-full w-full m-0 z-10 opacity-0 cursor-pointer peer"
                type="radio"
                value="Male"
                name="gender"
                checked={gender === "Male"}
              />
              <div className="flex flex-col items-center justify-center h-full border-2 rounded-2xl border-indigo-800 transition-all duration-300 ease-in-out peer-checked:bg-indigo-200 peer-checked:border-indigo-800 peer-checked:shadow-lg peer-checked:scale-105">
                <FcBusinessman className="text-9xl" />
                <h1 className="text-xl">Boy</h1>
              </div>
            </div>
            <div className="relative h-48 w-40 mx-10">
              <input
                className="absolute h-full w-full m-0 z-10 opacity-0 cursor-pointer peer"
                type="radio"
                value="Female"
                name="gender"
                checked={gender === "Female"}
              />
              <div className="flex flex-col items-center justify-center h-full border-2 rounded-2xl border-rose-500 transition-all duration-300 ease-in-out peer-checked:bg-rose-200 peer-checked:border-rose-500 peer-checked:shadow-lg peer-checked:scale-105">
                <FcBusinesswoman className="text-9xl" />
                <h1 className="text-xl">Girl</h1>
              </div>
            </div>
          </div>
        </Form.Item>

        <Form.Item
          label=""
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input
            size="large"
            placeholder="First Name"
            style={{
              marginBottom: 10,
            }}
          />
        </Form.Item>

        <Form.Item
          label=""
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input
            size="large"
            placeholder="Last Name"
            style={{
              marginBottom: 10,
            }}
          />
        </Form.Item>

        <div className="flex justify-between gap-10">
          <Form.Item
            label=""
            name="bDay"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <DatePicker
              size="large"
              placeholder="Birth Day"
              style={{ width: 200, marginBottom: 10 }}
            />
          </Form.Item>

          <Form.Item
            label=""
            name="grade"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber
              min={1}
              max={8}
              size="large"
              placeholder="Grade (1-8)"
              style={{ width: "100%", marginBottom: 10 }}
            />
          </Form.Item>
        </div>

        <div className="flex justify-evenly">
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="bg-blue-600"
              style={{ width: 100 }}
            >
              Next
            </Button>
          </Form.Item>
        </div>
      </Form>
      <Link to="/child-skill">Next</Link>
    </div>
  );
};

export default ChildInfo;