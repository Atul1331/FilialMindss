import React, { useState } from "react";
import { Rate } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Select, Button, Form, Space } from "antd";

// Skills Dropdown Dictionary
const skills = [
  {
    value: "cooking",
    label: "Cooking",
  },
  {
    value: "drawing",
    label: "Drawing",
  },
  {
    value: "singing",
    label: "Singing",
  },
];

// Rating Scales
const desc = ["Terrible", "Bad", "Normal", "Good", "Expert"];

// function for dropdown value change
const onChange = (value) => {
  console.log(`selected ${value}`);
};

// function for dropdown search
const onSearch = (value) => {
  console.log("search:", value);
};

// function for dropdown filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const ChildSkill = ({ page, setPage, setInput2 }) => {
  const [value, setValue] = useState(0);

  return (
    <div className="px-12 my-10 py-10 w-fit flex flex-col gap-y-10 items-center rounded-3xl shadow-2xl shadow-black bg-white">
      <Form
        name="dynamic_form_nest_item"
        onFinish={(e) => {
          console.log("Received values of form:", e);
          setInput2(e);
        }}
        style={{
          maxWidth: 600,
          minWidth: 350,
        }}
        autoComplete="off"
      >
        <h1 className="mb-6 text-2xl text-center">Child's Skills</h1>
        <Form.List name="skillList">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{
                    display: "flex",
                  }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "skill"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing Skill",
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      placeholder="Select Skill"
                      optionFilterProp="children"
                      onChange={onChange}
                      onSearch={onSearch}
                      filterOption={filterOption}
                      options={skills}
                      style={{
                        width: 150,
                        margin: 10,
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "rate"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing Rating",
                      },
                    ]}
                  >
                    <Rate
                      tooltips={desc}
                      onChange={setValue}
                      value={value}
                      style={{
                        margin: 10,
                      }}
                    />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Skill
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <div className="flex justify-evenly">
          <Form.Item>
            <Button
              type="primary"
              size="large"
              onClick={() => setPage(!page)}
              className="bg-blue-600"
              style={{ width: 100, }}
            >
              Back
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="bg-blue-600"
              style={{ width: 100, }}
            >
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default ChildSkill;