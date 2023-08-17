import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((themes) => ({
    movie: {
        padding: '10px'
    },
    links: {
        alignItems: 'center',
        fontWeight: 'bolder',
        textDecoration: 'none',
        [themes.breakpoints.up('xs')] : {
            display: 'flex',
            flexDirection: 'column'
        },
        '&:hover' : {
            cursor: 'pointer',
        }
    },
    image: {
        borderRadius: '20px',
        height: '300px',
        marginBottom: '10px',
        '&:hover': {
            transform: 'scale(1.05)'
        }
    },
    title: {
        color: themes.palette.text.primary,
        textOverflow: 'ellipsis',
        width: '230px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: 0,
        textAlign: 'center',
    }
}));

export default useStyles; 