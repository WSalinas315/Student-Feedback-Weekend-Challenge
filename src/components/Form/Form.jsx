import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Form({type, }){

  const updateData = (event) => {
    event.preventDefault();
    dispatch({
      type: {type},
      payload: feeling
    })
  }

  return(
    <p>FEELINGS!</p>
  )
}