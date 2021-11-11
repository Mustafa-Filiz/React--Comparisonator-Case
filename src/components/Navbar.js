import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../assets/logo.png'
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
	return {
		navbar : {
			backgroundColor : "#fff !important"
		},
		toolbar: {
			display: "flex",
			justifyContent: "space-between",
			alignItems:"center",
		},
		btnContainer:{
			width: "40%",
			display: "flex",
			justifyContent: "center",
			alignItems:"center",
		},
		links:{
			textDecoration: "none"
		},
		activeLink:{
			borderBottom : "4px solid #2196F3"
		},
		btn:{
			height: "5rem",
			fontSize: "1.1rem !important",
		}
	}
})


function Navbar() {
	const classes = useStyles()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar className={classes.toolbar}>
			<img src={logo} alt="logo" style={{color : "white"}}/>
			<Box className={classes.btnContainer}>
				<NavLink to="/" activeClassName={classes.activeLink} className={classes.links}>
					<Button className={classes.btn}>
						Teams & Players
					</Button>
				</NavLink>
				<NavLink to="/comparison" activeClassName={classes.activeLink} className={classes.links}>
					<Button className={classes.btn}>
						Compare Players
					</Button>
				</NavLink>
				<NavLink to="/favourites" activeClassName={classes.activeLink} className={classes.links}>
					<Button className={classes.btn}>
						Favourites
					</Button>
				</NavLink>
			</Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar
