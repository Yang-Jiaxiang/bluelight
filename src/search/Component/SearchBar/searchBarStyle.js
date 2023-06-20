import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  buttonRoot: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingRight: "10px",
  },
  button: {
    width: "50%",
    height: "85%",
    fontWeight: "bold",
    fontSize: "1rem !important",
  },
  accordion: {
    border: "1px solid #37a5cc",
    backgroundColor: "#031c2e !important",
    color: "white",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
    borderRadius: "1rem !important",
    padding: "0.1rem",
  },
}));

export default useStyles;
