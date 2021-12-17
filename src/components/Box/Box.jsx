import React, { useState } from "react";
import Mod from "../Mod/Mod";
import "./box.css";
const Box = ({ src, header,desc }) => {
  const [open, setOpen] = useState(false)
  const handleOpen =()=>{
    setOpen(!open)
  }
  return (
    <div>
      <div className="b1">
        <div className="det">

        <img src={src} alt="LOGO" />
        <h5>{header}</h5>
        <p>{desc}</p>
        <button onClick={handleOpen}>Apply Now</button>
        </div> 
      </div>
      <Mod open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Box;
