import { Input, Step, StepLabel, Stepper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Btn from "../../components/Btn/Btn";
import './quick.css'
const Quick = () => {
    const steps  =['PAN','Basic details','OTP']
    const [step] = useState(0)
  return (
    <div className="qcontainer">
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
      <div className="pan">
                <label>PAN</label>
      <Input placeholder="Enter your PAN" />
      </div>
      <div className="bt">
          <Btn label='Back'/>
          <Btn label='Next'/>
      </div>

    </div>
  );
};

export default Quick;
