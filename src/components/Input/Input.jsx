import React from 'react'
import TextField from '@mui/material/TextField'
import './input.css'
const Input = ({label,value,handleChange,name}) => {
    return (
        <div className="input">
           <TextField variant='outlined' name={name} label={label} value={value} onChange={handleChange} style={{width:600,borderColor:"red"}}/> 
        </div>
    )
}

export default Input
