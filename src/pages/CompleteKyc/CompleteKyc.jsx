import React, { useState } from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import './kyc.css'

import Btn from "../../components/Btn/Btn";


const CompleteKyc = () => {
  const steps = ["Basic Details", "Address details", "Other details"];
  const [step] = useState(0)

  return (
    <div>
      <div className="stepper">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={step} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
      <div className="kycDetail">


      </div>
      <div className="btn">
        <Btn label='back'/>
        <Btn label='next'/>
      </div>

    </div>
  );
};

export default CompleteKyc;
