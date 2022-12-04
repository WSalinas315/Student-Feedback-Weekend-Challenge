import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Form from "../Form/Form";


export default function FeelingForm(){

    // initialize dispatch
    const dispatch = useDispatch();

    // initialize history
    const history = useHistory();

    // local state for feeling value
    const [feeling, setFeeling] = useState('');

    // const addFeeling = (event) => {
    //   event.preventDefault();
    //   dispatch({
    //     type: 'ADD_FEELING',
    //     payload: feeling
    //   })
    // }

  return(
    <Form type='ADD_FEELING'  />
  )
}