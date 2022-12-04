import { TableContainer, TableHead, Table, TableRow, TableCell } from "@mui/material";
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import StarsIcon from "@mui/icons-material/Stars";

export default function Admin(){






  return (
    <div>
      <div className="stars">
        <StarsIcon color="teal" fontSize="large" /> <h1>Feedback Submitted!</h1>
      </div>
      <br />
      <TableContainer className="table-container">
        <Table className="feedback-table">
          <TableHead>
            <TableRow>
              <TableCell>
                Feeling
              </TableCell>
              <TableCell>
                Comprehension
              </TableCell>
              <TableCell>
                Support
              </TableCell>
              <TableCell>
                Comments
              </TableCell>
              <TableCell>
                Flag
              </TableCell>
              <TableCell>
                Delete
              </TableCell>
            </TableRow>
            <TableRow>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

    </div>
  )
}