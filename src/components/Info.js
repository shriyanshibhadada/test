import React from "react";



import Country from "./Country";
import styles from "../styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";


const Info = (props) => {
  

  const classes = styles();
  return (
    <div>
      <Paper>
        <Table aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell className = {classes.tableHead}>Country</TableCell>
              <TableCell align="right" className = {classes.tableHead}>Abbreviation</TableCell>
              <TableCell align="right" className = {classes.tableHead}>Capital City</TableCell>
              <TableCell align="right" className = {classes.tableHead}>Government</TableCell>
              <TableCell align="right" className = {classes.tableHead}>Population</TableCell>
              <TableCell align="right" className = {classes.tableHead}>Temperature</TableCell>
              <TableCell align="right" className = {classes.tableHead}>Flag</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.res.map((value, index) => (
              <Country key={index} info={value} />
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Info;
