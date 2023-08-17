import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((themes) => ({
    movieContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'auto',
        [themes.breakpoints.down('sm')] : {
            justifyContent: 'center',
        }
    }
}))

export default useStyles;
