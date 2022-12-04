import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './Form.css';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export default function Form({ typeData, property, question, inputLabel, nextBtn, prevBtn }) {

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
    // console.log('NEXT BTN PATH:', nextBtn);
    // console.log('type:', typeData);
    // console.log('INPUT DATA:', inputData);
    event.preventDefault();
    dispatch({
      type: typeData,
      payload: inputData
    })
    history.push(nextBtn);
  }

  // function to go back a page
  const goBack = () => {
    history.push(prevBtn);
  }

  return (
    <form className="form-body" onSubmit={(event) => updateData(event)}>
      <h1>{question}</h1>
      <br />
      <div className="inputs">
        <div className="input-boxes">{inputLabel != "Feeling?" && <Button variant="contained" onClick={() => goBack()}>PREVIOUS</Button>}</div>
        <div className="input-boxes">{inputLabel == 'Comments' ?
          <FormControl fullWidth>
            <TextField required 
                       value={inputData} 
                       label={inputLabel} 
                       onChange={(event) => setInputData(event.target.value)} 
                       variant="standard" />
          </FormControl>
          :
          <FormControl fullWidth>
            <InputLabel>{inputLabel}</InputLabel>
            <Select required
                    value={inputData}
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
        <div className="input-boxes"><Button variant="contained" type="submit">NEXT</Button></div>
      </div>
    </form>
  )
}