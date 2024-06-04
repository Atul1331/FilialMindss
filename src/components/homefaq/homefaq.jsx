import React, { useState } from "react";
import "./homefaq.css";
import line from "../../assets/underline.svg";
import { Container } from "@mui/material";

const data = [
  {
    key: 1,
    title: "What is Filial Minds? How does it work?",
    data: `Filial Minds is designed to ease and enhance tasks related to child assessments, mental health analysis, and early development.`,
    isOpen: false,
  },
  {
    key: 2,
    title: "What is the importance of early childhood learning ?",
    data: `Early childhood learning refers to the educational and developmental experiences that children undergo during their early years, typically from birth to around 8 years of age. It encompasses a wide range of cognitive, emotional, social, and physical development processes that lay the foundation for future learning and well-being.`,
    isOpen: false,
  },
  {
    key: 3,
    title: "Is there someone whom I can talk while proceeding with this ?",
    data: ` The Joonify platform is designed to be user-friendly and intuitive, guiding both parents and children through the assessment process smoothly. However, if you have any questions or need help navigating the platform, our Talent Advisors are easily available. You can reach out at: +914739470-0408 or email us at: hello@filalminds.com `,
    isOpen: false,
  },
];

const Section = ({ question, answer, isVisible, setIsVisible }) => {
  return (
    <>
      <div className="w-[100%] bg-[#664dd4] px-5 py-2  mx-auto cursor-pointer transition ease-out duration-500">
        <div
          onClick={() => setIsVisible(!isVisible)}
          className="flex justify-between"
        >
          <div className="text-xl font-medium text-white">{question}</div>
          {isVisible ? (
            <div className="text-3xl" style={{ color: "#f6d26f" }}>
              -
            </div>
          ) : (
            <div className="text-2xl" style={{ color: "#f6d26f" }}>
              +
            </div>
          )}
        </div>
        <div className="w-[88%] text-md text-white">
          {isVisible && <p>{answer}</p>}
        </div>
      </div>
      <div
        className="w-[100%] mx-auto h-[1px]"
        style={{ backgroundColor: "#aaa" }}
      ></div>
    </>
  );
};

export default function Homefaq() {
  const [visibleSection, setVisibleSection] = useState(null);
  return (
    <Container fixed>
      <div
        className="my-28"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h3
          className="text-5xl text-center font-bold"
          style={{
            fontFamily: `'Protest Riot', sans-serif`,
            color: "#333",
          }}
        >
          Frequently Asked{" "}
          <h3
            className="text-5xl text-center font-bold"
            style={{
              display: "inline",
              fontFamily: `'Protest Riot', sans-serif`,
              color: "#664dd4",
            }}
          >
            Questions
          </h3>
        </h3>
        <img
          src={line}
          alt=""
          style={{
            height: "20px",
            alignSelf: "center",
            objectFit: "contain",
            marginLeft: "350px",
            marginTop: "-5px",
            marginBottom: "40px",
          }}
        />

        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            width: "1000px",
            alignSelf: "center",
          }}
        >
          {data.map((section) => (
            <Section
              key={section.key}
              question={section.title}
              answer={section.data}
              isVisible={visibleSection === section.key}
              setIsVisible={() =>
                setVisibleSection(
                  visibleSection === section.key ? null : section.key
                )
              }
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
