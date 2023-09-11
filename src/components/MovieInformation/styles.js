import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(themes => ({
    
    containerSpaceAround: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '10px 0 !important',
        [themes.breakpoints.down('sm')] : {
            flexDirection: 'column',
            flexWrap: 'wrap'
        }
    },

    poster: {
        borderRadius: '20px',
        boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
        width: '80%',
        [themes.breakpoints.down('md')] : {
            margin: '0 auto',
            width: '50%',
            height: '350px',
        },
        [themes.breakpoints.down('sm')] : {
            margin: '0 auto',
            width: '100%',
            height: '350px',
            marginBottom: '30px',
        },
    },
    
    genresContainer: {
        margin: '10px 0 !important',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },

    genreImage: {
        filter: themes.palette.mode === 'dark' && 'invert(1)',
        marginRight: '10px',
    },
    
    links: {
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        [themes.breakpoints.down('sm')] : {
            padding: '0.5rem 1rem'
        }
    },
    
    castImage: {
        width: '100%',
        maxWidth: '7em',
        height: '8em',
        objectFit: 'cover',
        borderRadius: '10px',
    },

    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        [themes.breakpoints.down('sm')] : {
            flexDirection: 'column'
        }
    }

}))


export default useStyles; 