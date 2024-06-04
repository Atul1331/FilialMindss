import React, { useState } from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const QuestionList = ({ question, setQuestion, ans, setAns, questionData }) => {
  // const [question, setQuestion] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = (content) => {
    if (content) setQuestion(content);
    setCurrentStep((prevQuestion) => prevQuestion + 1);
  };

  const handleFinish = (content) => {};

  const handleBack = () => {
    setCurrentStep((prevQuestion) => prevQuestion - 1);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setQuestion(questionData.content[0]);
  };

  return (
    <div className="right-0 w-1/5 pt-16 px-10 pl-0 h-screen">
      <div className="flex flex-col justify-center h-full gap-4 text-black">
        {/* {questionData.content.map((content) => ( */}
        {/* // <button */}
        {/* //   onClick={() => setQuestion(content)} */}
        {/* //   className={ */}
        {/* //     question === content.id
          //       ? "rounded-lg px-3 py-2 shadow-md bg-yellow-500"
          //       : "rounded-lg px-3 py-2 shadow-md bg-white"
          //   }
          // >
          //   {content.id}
          // </button> */}

        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={currentStep} orientation="vertical">
            {questionData.content.map((step, index) => (
              <Step key={step.id}>
                <StepLabel>{step.id}</StepLabel>
                <StepContent>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={
                          () =>
                            index + 1 < questionData.content.length
                              ? handleNext(questionData.content[index + 1])
                              : handleFinish(null)
                          // handleNext(
                          //   index + 1 < questionData.content.length
                          //     ? questionData.content[index + 1]
                          //     : null
                        }
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      {/* <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button> */}
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {currentStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
        {/* ))} */}
      </div>
    </div>
  );
};

export default QuestionList;
