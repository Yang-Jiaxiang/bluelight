import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  },
  leftAlign: {
    display: "flex",
    alignItems: "center",
  },
}));

export default useStyles;
