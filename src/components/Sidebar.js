import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Filter from "./Filter";
import styles from "../styles";
import { Typography } from "@material-ui/core";
const Sidebar = () => {
  const classes = styles();
  return (
    <div>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}>
              <Typography variant="h6">
                Filters
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Filter />
          <Filter />
          <Filter />
          <Filter />
          <Filter />
          <Filter />
        </TableBody>
      </Table>
    </div>
  );
};

export default Sidebar;
