import React from 'react'
import { Grid } from '@mui/material'
import { Movie } from '..'

import useStyles from './styles'

const MovieList = ({ movies, numberOfMovies }) => {

  const classes = useStyles();

  return (
    <Grid 
      container 
      className={classes.movieContainer}
    >
      {movies.results.slice(0, numberOfMovies).map((movie, index) => (
        <Movie 
          key={index} 
          movie={movie} 
          index={index}   
        />
      ))}
    </Grid>
  )
}

export default MovieList