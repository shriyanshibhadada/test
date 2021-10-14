import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import styles from "../styles";
const Country = (props) => {
  const classes = styles();
  return (
    <TableRow>
      <TableCell component="th" scope="row" className = {classes.tableCell}>
        {props.info.country}
      </TableCell>
      <TableCell align="right" className = {classes.tableCell}>{props.info.abbreviation}</TableCell>
      <TableCell align="right" className = {classes.tableCell}>{props.info.city}</TableCell>
      <TableCell align="right" className = {classes.tableCell}>{props.info.government}</TableCell>
      <TableCell align="right" className = {classes.tableCell}>{props.info.population}</TableCell>
      <TableCell align="right" className = {classes.tableCell}>{props.info.temperature}</TableCell>
      <TableCell align="right" className = {classes.tableCell}>
        <Avatar src={props.info.flag_base64} />
      </TableCell>
    </TableRow>
  );
};

export default Country;
