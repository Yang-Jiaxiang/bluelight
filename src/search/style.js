import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    height: "95vh",
  },
  tableRoot: {
    display: "flex",
    flexDirection: "column",
    height: "70vh",
    flexGrow: 1,
    backgroundColor: "rgba(255,255,255,0.8)",
    backdropFilter: "invert(20%)",
    borderRadius: "1rem",
  },
  table: {
    borderRadius: "1rem",
    flexGrow: 1,
    overflowY: "auto",
  },
}));

export default useStyles;
