import React, { useState, useEffect } from "react";
import TableHeader from "../TableHeader/TableHeader";
import StarsIcon from "@mui/icons-material/Stars";
import Button from "@mui/material";
import axios from 'axios';
import './Admin.css';

export default function Admin() {

  // initialize local state
  const [feedback, setFeedback] = useState([]);

  // Get database information to display
  const fetchFeedback = () => {
    axios.get('/feedback').then(response => {
      console.log(feedback);
      setFeedback(response.data);
    }).catch(error => {
      console.log('Error with Axios GET in Admin.jsx:', error);
    });
  }

  // Call fetchFeedback
  useEffect(() => { fetchFeedback() }, []);


  return (
    <div className="admin-content">
      <div className="stars">
        <StarsIcon color="teal" fontSize="large" /> <h1>Feedback Submitted!</h1>
      </div>
      <br />
      <table>
        <TableHeader />
        <tbody>
          {feedback.map(feedbackItem =>(
            <tr key={feedbackItem.id}>
              <td>{feedbackItem.feeling}</td>
              <td>{feedbackItem.understanding}</td>
              <td>{feedbackItem.support}</td>
              <td>{feedbackItem.comments}</td>
              {/* <td>Flag Button</td>
              <td>Delete Button</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}