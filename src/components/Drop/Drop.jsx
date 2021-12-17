import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./drop.css";
export default function Drop({ label,opt1,opt2,opt3 }) {
  return (
    <div className="drop">
      <Box>
        <FormControl  style={{width:520}}>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            label={label}
           
          >
            <MenuItem value={10}>{opt1}</MenuItem>
            <MenuItem value={20}>{opt2}</MenuItem>
            <MenuItem value={30}>{opt3}</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
