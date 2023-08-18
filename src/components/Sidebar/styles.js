import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((themes) => ({
    imageLink : {
        display: 'flex',
        justifyContent: 'center',
        padding: '10% 0'
    },
    image: {
        width: '70%',
        
    },
    links: {
        color: themes.palette.text.primary,
        textDecoration: 'none'
    },
    genreImages: {
        filter: themes.palette.mode === 'dark' ? 'invert(1)' : 'dark'
    }
}))

export default useStyles;