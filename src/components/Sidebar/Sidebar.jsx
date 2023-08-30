import React, {useEffect} from 'react'
import { Divider, List, ListItem, ListItemButton, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/styles'
import { useDispatch, useSelector } from 'react-redux'

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory'
import useStyles from './styles'
import genres from '../../assets/genres'
import { useGetGenresQuery } from '../../services/TMDB'

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const categories = [
    { label: 'Popular', value: 'popular'},
    { label: 'Top Rated', value: 'top_rated'},
    { label: 'Upcoming', value: 'upcoming'}
]

const Sidebar = ({setMobileOpen}) => {
    const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory)
    const theme = useTheme();
    const classes = useStyles();
    const {data, isFetching} = useGetGenresQuery();
    const dispatch = useDispatch();

    console.log(genreIdOrCategoryName)

    return (
    <>
        {/* //* FILMPIRE LOGO  */}
        <Link to='/' className={classes.imageLink}>
            <img 
                className={classes.image} 
                src={theme.palette.mode === 'light' ? redLogo : blueLogo }
                alt='Filmpire Logo'
            />
        </Link>
        <Divider /> 

        {/* //* CATEGORIES */}
        <List>
            <ListSubheader>Categories</ListSubheader>
            {categories.map(( {label, value}) => (
                <Link key={value} className={classes.links} to='/'>
                    <ListItem>
                    {/* MAY NEED TO MOVE THE ONCLICK EVENT TO LISTITEMBUTTON IF NOT WORKING PROPERLY HEHEXD IM A LITTLE SILLY */}
                        <ListItemButton onClick={() => dispatch(selectGenreOrCategory(value))}>
                            <ListItemIcon>
                                <img src={genres[label.toLowerCase()]} className={classes.genreImages} height={30} />
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            ))}
        </List>
        <Divider />

        {/* //* GENRES */}
        <List>
            <ListSubheader>Genres</ListSubheader>

            {isFetching ? (
                <Box display='flex' justifyContent='center'>
                    <CircularProgress size='4rem' />
                </Box>
            ) : data.genres.map(( {name, id}) => (
                <Link key={name} className={classes.links} to='/'>
                    <ListItem>
                        <ListItemButton onClick={() => dispatch(selectGenreOrCategory(id))}>
                            <ListItemIcon>
                                <img src={genres[name.toLowerCase()]} className={classes.genreImages} height={30} />
                            </ListItemIcon>
                            <ListItemText primary={name} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            ))}
        </List>

    </>
    )
}

export default Sidebar