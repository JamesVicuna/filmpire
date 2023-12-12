import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((themes) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: "30px 2px",
  },
  pageNumber: {
    margin: "0 20px !important",
    color: themes.palette.text.primary,
  },
}));

export default useStyles;
