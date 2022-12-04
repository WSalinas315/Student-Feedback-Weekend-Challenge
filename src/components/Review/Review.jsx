import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { Button } from "@mui/material";
import './Review.css';

export default function Review({ nextBtn, prevBtn }) {

  // history
  const history = useHistory();

  // dispatch
  const dispatch = useDispatch();

  // get data from the store
  const studentData = useSelector(store => store.studentFeedback);

  // Submit function with Axios POST to server.
  const submit = () => {
    console.log('Beginning axios POST with:', studentData);
    axios.post('/feedback', studentData).then((response) => {
      console.log(response);
      // reset store data
      dispatch({
        type: 'CLEAR_FIELDS'
      });
      // move to Submitted component
      history.push(nextBtn);
    }).catch((error) => {
      console.log('Error with POST:', error);
    });
  }

  // function to go back a page
  const goBack = () => {
    history.push(prevBtn);
  }

  return (
    <div>
      <div className="feedback">
        <h1>Review Your Feedback</h1>
        <br />
        {/* Write data to review to the DOM */}
        <h2>Feelings: {studentData.feeling}</h2>
        <h2>Understanding: {studentData.understanding}</h2>
        <h2>Support: {studentData.support}</h2>
        <h2>Comments: {studentData.comments}</h2>
      </div>
      <div className="buttons">
        <Button className="btn-objects" variant="contained" onClick={() => goBack()}>PREVIOUS</Button>
        <Button className="btn-objects" variant="contained" onClick={() => submit()}>SUBMIT</Button>
        <div className="btn-objects"></div>
      </div>
    </div>
  )
}