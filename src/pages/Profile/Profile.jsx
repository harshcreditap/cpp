import React, { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import Btn from "../../components/Btn/Btn";
import "./profile.css";
import axios from 'axios'
import { useFormik } from "formik";
const Profile = () => {
  const [data,setData]=useState([])
  const formik = useFormik({
    initialValues: {
      name:"",
      email: "",
      state: "",
      gender: "",
      pan: "",
      aadhar: "",
      afhn: "",
      mn: `${data.name}`,
    },
  });

  const fetchData =async()=>{
    const data = await axios.get(`https://jsonplaceholder.typicode.com/users/1`)
    setData(data.data)
  }
  useEffect(()=>{
    fetchData()

  },[])
  // console.log(data.address[1].city)
  
  // console.log(formik.values)
  return (
    <div className="profile_container">
      <div className="basic">
        <div className="heading spacing">
          <h5>Basic Details</h5>
        </div>
        <div>
          
          <Input
            // label="Name"
            name="name"
            value={data.name}
            handleChange={formik.handleChange}
          />
          <p>
            <em>*As per PAN</em>
          </p>
          <Input
            // label="E-mail"
            name="email"
            value={data.email}
            handleChange={formik.handleChange}
          />
          <Input
            // label="State"
            name="state"
            value={data.id}
            handleChange={formik.handleChange}
          />
          <Input
            // label="Gender"
            name="gender"
            value={"Female"}
            handleChange={formik.handleChange}
          />
          <Input
            // label="PAN"
            name="pan"
            value={data.username}
            handleChange={formik.handleChange}
          />
          <Input
            // label="Aadhar"
            name="aadhar"
            value={data.phone}
            handleChange={formik.handleChange}
          />
          <Input
            // label="Applicant's Father/Husband Name"
            name="afhn"
            value={data.website}
            handleChange={formik.handleChange}
          />
          <Input
            // label="Mother's Name"
            name="mn"
            // value={address.city }
            value={formik.values.mn}
            handleChange={formik.handleChange}
          />
        </div>
      </div>
      <div className="account">
        <div className="heading spacing">
          <h5>Bank Details</h5>
        </div>
        <div>
          <Input label="Account Holder Name" name="ahn" />
          <Input label="Bank Name" name="bn" />
          <Input label="Account Number" name="an" />
          <Input label="IFSC" name="ifsc" />
          <Input label="Branch Name" name="brn" />
        </div>
      </div>
      <div className="current">
        <div className="heading spacing">
          <h5>Current Address</h5>
        </div>
        <div>
          <Input label="House/Plot/Door No." name="house" />
          <Input label="Street/Area" name="street" />
          <Input label="Landmark" name="land" />
          <Input label="City" name="city" />
          <Input label="Country" name="country" />
          <Input label="Pincode" name="pin" />
        </div>
      </div>
      <div className="current">
        <div className="heading spacing">
          <h5>Permanent Address</h5>
        </div>
        <div>
          <Input label="House/Plot/Door No." />
          <Input label="Street/Area" />
          <Input label="Landmark" />
          <Input label="City" />
          <Input label="Country" />
          <Input label="Pincode" />
        </div>
      </div>

      <Btn label="Submit" />
    </div>
  );
};

export default Profile;
