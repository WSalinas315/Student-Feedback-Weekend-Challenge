import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './Form.css';
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function Form({typeData, property, question, inputLabel, nextBtn, prevBtn}){

  // history
  const history = useHistory();

  // dispatch
  const dispatch = useDispatch();

  // get data from the store
  const studentData = useSelector(store => store.studentFeedback);

  // local state
  const [inputData, setInputData] = useState(studentData[property]);

  // submit data to the store and move to the next form item
  const updateData = (event) => {
    console.log('INPUT DATA:', inputData);
    console.log('type:', typeData);
    event.preventDefault();
    dispatch({
      type: typeData,
      payload: inputData
    })
    console.log('NEXT BTN PATH:', nextBtn);
    history.push(nextBtn);
  }

  // function to go back a page
  const goBack = () =>{
    history.push(prevBtn);
  }

  return (
      <form className="form-body" onSubmit={(event) => updateData(event)}>
        <h1>{question}</h1>
        <br />
        {inputLabel != "Feeling?" && <Button onClick={() => goBack()}>PREVIOUS</Button>}
        <div className="inputs">
          {inputLabel == 'Comments' ? <Comments /> :
            <FormControl fullWidth>
              <InputLabel>{inputLabel}</InputLabel>
              <Select value={inputData} 
                      label={inputLabel} 
                      onChange={(event) => setInputData(event.target.value)}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          }
        </div>
        <div>
          <Button type="submit">NEXT</Button>
        </div>
      </form>
  )
}