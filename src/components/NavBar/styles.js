import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

const useStyles = makeStyles((themes) => ({
    toolbar: {
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '10px',
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
    drawer: {
        [themes.breakpoints.up('sm')] : {
            width: drawerWidth,
            flexShrink : 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    linkButton: {
        '&:hover' : {
            color: 'white !important',
            textDecoration: 'none'
        }
    },
}))


export default useStyles; 