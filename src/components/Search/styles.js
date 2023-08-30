import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((themes) => ({
    searchContainer: {
        [themes.breakpoints.down('sm')] : {
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
        }
   },

    input: {
        color: themes.palette.mode === 'light' && 'black' ,
        filter: themes.palette.mode === 'light' && 'invert(1)',
        [themes.breakpoints.down('sm')] : {
            marginTop: '-10px',
            marginBottom: '10px'
        }
    
    }

}))


export default useStyles; 