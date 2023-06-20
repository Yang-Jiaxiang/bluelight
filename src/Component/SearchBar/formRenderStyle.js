import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "33%",
    fontSize: "1.1rem",
  },
  TextField: {
    width: "100%",
    backgroundColor: "#344775",
    borderRadius: "5px",
    boxShadow: "inset 1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
    "& label.Mui-focused": {
      color: "#d1d1d1 !important",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#d1d1d1 !important",
      },
    },
  },
  TextFieldDate: {
    width: "100%",
  },
  customHoverFocus: {
    top: "50%",
    transform: "translate(0, -50%)",
    backgroundColor: "rgb(122,220,180)",
    "&:hover, &.Mui-focusVisible": { backgroundColor: "rgb(0,208,130)" },
  },
}));

export default useStyles;
