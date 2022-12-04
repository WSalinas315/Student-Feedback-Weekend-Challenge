import React from "react";
import StarsIcon from '@mui/icons-material/Stars';
import { Button } from "@mui/material";
import './Submitted.css';
import { useHistory } from "react-router-dom";

export default function Submitted(){

    // history
    const history = useHistory();

  // function to go back to start page
  const returnToStart = () => {
    history.push('/');
  }

  return (
    <div className="submission-page">
      <div className="stars">
        <StarsIcon color="teal" fontSize="large" /> <h1>Feedback Submitted!</h1>
      </div>
      <br />
      <div className="ty-box">
        <h1>Thank You!</h1>
        <br />
        <Button variant="contained" onClick={() => returnToStart()}>Leave New Feedback</Button>
      </div>
    </div>
  )
}