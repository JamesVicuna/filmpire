import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((themes) => ({
    toolbar: {
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '240px',
        [themes.breakpoints.down('sm')]: {
            marginLeft: 0,
            flexWrap: 'wrap',
        }
    },
    menuButton: {
        marginRight: themes.spacing(2),
        [themes.breakpoints.up('sm')] : {
            display: 'none',
        }
    },
}))


export default useStyles; 