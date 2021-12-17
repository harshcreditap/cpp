import React from "react";
import Box from "../../components/Box/Box";
import "./home.css";
const HomePage = () => {
  return (
    <div>
      <div className="container">
        <div className="boxes">
          <div className="box">
            <Box
              src="https://s3.ap-south-1.amazonaws.com/media.creditap.in/production/v2.0/public/products/fd0b8d25-4c2c-4640-9a54-93c0c3a0fffb.svg"
              header="SHORT TERM SCHOOL FEES FINANCING"
              desc="We ensure the total annual fee amount is disbursed to the school of your choice while enabling student loan repayments through easy EMIs."
              
            /> 
            <Box
              src="https://s3.ap-south-1.amazonaws.com/media.creditap.in/production/v2.0/public/products/c9f2ba71-3b6d-437c-b542-46deb48e8dce.svg"
              header="SHORT TERM COLLEGE/HIGHER EDUCATION"
              desc='We enable you to pursue courses in many universities, colleges by providing upfront payment of the annual fee to the institution of your choice'
            />
            <Box
              src="https://s3.ap-south-1.amazonaws.com/media.creditap.in/production/v2.0/public/products/b79e07b6-d2b9-4cfc-b023-63a7497463a7.svg"
              header="SHORT TERM CAREER COACHING"
              desc='We assist you in securing funds for the course of your preference, online or offline and enable you to handle the course fee of career enhancement program seamlessly'
            />
            <Box
              src="https://s3.ap-south-1.amazonaws.com/media.creditap.in/production/v2.0/public/products/c9f2ba71-3b6d-437c-b542-46deb48e8dce.svg"
              header="LONG TERM EDUCATION LOAN"
              desc='Long Term Educational Loan Students can apply for long term educational loan for their Bachelors or Masters degree and repay them after they secure a job as well. Loan Moratorium might also apply for these kind of loans.'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
