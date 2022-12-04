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

  const submit = () => {



    history.push(nextBtn);
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
        <h2>Feelings: {studentData.feeling}</h2>
        <h2>Understanding: {studentData.understanding}</h2>
        <h2>Support: {studentData.support}</h2>
        <h2>Comments: {studentData.comment}</h2>
      </div>
      <div className="buttons">
        <Button className="btn-objects" variant="contained" onClick={() => goBack()}>PREVIOUS</Button>
        <Button className="btn-objects" variant="contained" onClick={() => submit()}>SUBMIT</Button>
        <div className="btn-objects"></div>
      </div>
    </div>
  )
}