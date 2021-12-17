import * as React from "react";
import Box from "@mui/material/Box";


import Modal from "@mui/material/Modal";
import "./mod.css";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 540,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Mod({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div className="modal">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="description">
            <svg
              class="MuiSvgIcon-root jss49"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
            </svg>
            <h3>CHECK INSTANT ELIGIBILITY</h3>
            <p>
              Use our instant eligibility checker to know your eligibility for
              the loan amount you need. Please note that the loan disbursement
              is subject to the documents provided when you actually apply for
              it.
            </p>
            <button><Link className='cnow' to='/quick'>CHECK NOW</Link></button>
          </div>
          <div className="description">
            <svg
              class="MuiSvgIcon-root jss49"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z"></path>
            </svg>
            <h3>COMPLETE KYC</h3>
            <p>
              Complete your KYC now in 3 simple steps to apply for a Loan. It's
              completely online and hassle-free.
            </p>
            <button><Link className='cnow' to='/completeKyc'>COMPLETE NOW</Link></button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
