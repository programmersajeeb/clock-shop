import { AppBar, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
  const theme = useTheme()
  const useStyle = makeStyles({
    navItem:{
      color:"#FFFFFF",
      textDecoration:"none",
    },
    navIcon:{
      [theme.breakpoints.up('sm')]: {
        display:"none !important",
      }
    },
    navItemContainer:{
      [theme.breakpoints.down('sm')]: {
        display:"none",
      }
    },
    navLogo:{
      [theme.breakpoints.down('sm')]: {
        textAlign:"right",
      }
    },
    mobileNavItem:{
      textDecoration:"none",
      color:"#FFFFFF",

    }
  })
  const {navItem, navIcon, navItemContainer, navLogo, mobileNavItem} = useStyle()

  const [state, setState] = React.useState(false);
  const {user, logout} = useAuth();
  const list = (
    <Box role="presentation" >
      <List>
          <ListItem button>
            <ListItemText> <Link className={mobileNavItem} to='/'>Home</Link> </ListItemText>
          </ListItem>
          <Divider />
          {
            user?.email ?
          <Box>
          <ListItem button>
            <ListItemText> <Link className={mobileNavItem} to='/dashboard'>Dashboard</Link> </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
          <Button sx={{color:"#FFF"}} onClick={logout}>Logout</Button>
          </ListItem>
          <Divider />
          </Box>
          :
          <ListItem button>
            <ListItemText> <Link className={mobileNavItem} to='/login'>Login</Link> </ListItemText>
          </ListItem>
        }
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:"rgba(16, 16, 16, 0.514)", boxShadow:"none"}} position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={navIcon}
            onClick={()=> setState(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Clock Shop
          </Typography>
          <Box className={navItemContainer}>
               <Box sx={{display:"inline-block"}}>
               <NavLink className={navItem} to="/"> <Button color="inherit">Home</Button> </NavLink>
               </Box>
               {
            user?.email ?
            <Box sx={{display:"inline-block"}}>
              <NavLink className={navItem} style={{textDecoration:"none", color:"#fff"}} to="/dashboard"> <Button color="inherit">Dashboard</Button> </NavLink>
              <Button onClick={logout} color="inherit">Logout</Button>
            </Box>
             : 
             <Box sx={{display:'inline-block'}}>
               <NavLink className={navItem} to="/login"> <Button color="inherit">Login</Button> </NavLink>
             </Box>
          }
             </Box>
        </Toolbar>
      </AppBar>
    </Box>
    <div>
        <React.Fragment>
          <Drawer
            open={state}
            onClose={()=> setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
    </div>
    </>
  );
};

export default Navigation;