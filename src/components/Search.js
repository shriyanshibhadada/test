import React from "react";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import styles from "../styles";
import { Autocomplete } from "@mui/material";
import InputAdornment from "@material-ui/core/InputAdornment";
import Ssearch from "@mui/icons-material/Search";
import "bootstrap/dist/css/bootstrap.min.css";

const Search = (props) => {
  const classes = styles();
  return (
    <div className="row">
      <div className={`row ${classes.searchTypemargin}`}>
        <Typography variant="h4" className={classes.input}>
          Search your country
        </Typography>
      </div>
      <div className={`row justify-content-md-center ${classes.searchmargin}`}>
        <Autocomplete
          ListboxProps={{ style: { maxHeight: 200, overflow: "auto" } }}
          sx={{ width: 300 }}
          freeSolo
          disableClearable
          options={props.res.map((option) => option.country)}
          renderInput={(params) => (
            <TextField
              className={classes.search}
              {...params}
              InputProps={{
                ...params.InputProps,
                classes: {
                  root: classes.input,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <Ssearch />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              focused
            />
          )}
        />
      </div>
    </div>
  );
};

export default Search;
