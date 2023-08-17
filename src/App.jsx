import { CssBaseline } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { Actors, MovieInformation, Movies, NavBar, Profile } from './components'
import useStyles from './styles'



function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Routes>
          <Route path="/" element={<Movies />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
