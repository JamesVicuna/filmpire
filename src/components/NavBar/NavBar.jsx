import React, {useState} from 'react'
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import useStyles from './styles'
import { useTheme } from '@mui/material/styles';
import { Sidebar } from '..'

const NavBar = () => {
  const classes = useStyles();
  const themes = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isAuthenticated = true;

  return (
    <> 
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            // Mobile - Menu Button
            <IconButton 
              color='inherit'
              edge='start'
              style={{outline: 'none'}}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuButton}
            >
            {/* Mobile - Menu */}
              <Menu />
            </IconButton>
          )}

          {/* Dark / Light Mode Button */}
          <IconButton
            color='inherit'
            sx={{ ml: 1}}
            onClick={() => {}}
          >
            {themes.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {/* Web Search Bar */}
          {!isMobile && 'Search...'}

          {/* Login / Profile Buttons */}
          <div>
            {!isAuthenticated ? (
              // Login Button 
              <Button color='inherit' onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ): (
               // Profile Button
              <Button 
                color='inherit' 
                component={Link} 
                to={`/profile/:id`} 
                className={classes.linkButton} 
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                {/* User Avatar */}
                <Avatar 
                  style={{width: 30, 
                  height: 30}} 
                  alt='Profile' 
                  src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' />
              </Button>
            )}
          </div>
          {isMobile && 'Search...'}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile 
          ? (
            // Mobile Drawer
            <Drawer 
              variant='temporary'
              anchor='left'
              open={mobileOpen}
              onClose={() => setMobileOpen((previousMobileOpen) => !previousMobileOpen )}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true}}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ): (
            // Web Drawer
            <Drawer 
              classes={{paper: classes.drawerPaper}} 
              className={classes.test} 
              variant='permanent' 
              open
              anchor='left'
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  )
}

export default NavBar
