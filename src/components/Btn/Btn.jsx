import React from "react";
import Button from "@mui/material/Button";
import './btn.css'
const Btn = ({ label, type}) => {

  return (
    <div className='butn'>
      <Button variant="contained" type={type} label={label} style={{backgroundColor:"#ee2f58"}}>
        {label}
      </Button>
    </div>
  );
};

export default Btn;
