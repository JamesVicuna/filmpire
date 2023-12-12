import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((themes) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  toolbar: {
    height: "70px",
    color: "blue",
  },
  content: {
    flexGrow: 1,
    padding: "2em",
    width: "100%",
  },
}));

export default useStyles;
