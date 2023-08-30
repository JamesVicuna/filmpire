import React from 'react'
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material'
import { Link } from 'react-router-dom'

import useStyles from './styles'

const Movie = ({ movie, index }) => {
    const classes = useStyles();
    // console.log(movie, index)

  return (
    <Grid item xs={12} s={6} md={3} lg={3} xl={2} className={classes.movie}>
        <Grow in key={index} timeout={(index + 1) * 250}>
            <Link 
              className={classes.links} 
              to={`/movie/${movie.id}`}
            >
                {/* Movie Image */}
                <img 
                  alt={movie.title} 
                  className={classes.image} 
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://fillmurray.com/200/300'}   
                />
                {/* Movie Title */}
                <Typography 
                  className={classes.title} 
                  variant='h5'
                >
                  {movie.title}
                </Typography>
                {/* Movie Rating */}
                <Tooltip 
                  title={`${movie.vote_average} / 10`}
                  disableTouchListener 
                >
                  <div>
                    <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
                  </div>
                </Tooltip>
            </Link>
        </Grow>
    </Grid>
  )
}

export default Movie