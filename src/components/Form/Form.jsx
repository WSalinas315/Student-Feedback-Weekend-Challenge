import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Form({typeData, }){

  const updateData = (event) => {
    event.preventDefault();
    dispatch({
      type: {typeData},
      payload: feeling
    })
  }

  return(
    <p>FEELINGS!</p>
  )
}