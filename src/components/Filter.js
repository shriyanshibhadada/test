import React from "react";

import styles from "../styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
const Filter = () => {
  const classes = styles();
  return (
    <TableRow>
      <TableCell component="th" scope="row" className={classes.tableCell}>
        <TextField
          className={classes.filtersearch}
          select
          InputProps={{
            classes: {
              root: classes.input,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
          SelectProps={{
            classes: { icon: classes.input },
          }}
          variant="outlined"
          focused
        >
          <MenuItem>1</MenuItem>
          <MenuItem>2</MenuItem>
        </TextField>
      </TableCell>
    </TableRow>
  );
};

export default Filter;
