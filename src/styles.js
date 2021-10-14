import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tableHead: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  tableCell: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    borderBottom: "none"
  },
  search: {
    backgroundColor: theme.palette.common.black,
  },
  filtersearch: {
    backgroundColor: theme.palette.common.black,
    width: "250px",
    marginTop: "10px"
  },
  input: {
    color: theme.palette.common.white,
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  cssFocused: {},
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white !important",
  },
  searchTypemargin: {
    marginBottom: "30px",
    marginTop: "30px"
  },
  searchmargin: {
    marginBottom: "80px"
  }
}));

export default useStyles;
