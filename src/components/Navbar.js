import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../assets/logo.png';
import { makeStyles } from '@mui/styles';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles((theme) => {
    return {
        navbar: {
            backgroundColor: '#fff !important',
        },
        toolbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        logo: {
            width: '20%',
            [theme.breakpoints.down('md')]: {
                width: '50%',
            },
            [theme.breakpoints.down('sm')]: {
                width: '70%',
            },
        },
        btnContainer: {
            width: '40%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
			[theme.breakpoints.down('md')]: {
                display: 'none !important',
            },
        },
        links: {
            textDecoration: 'none',
        },
        activeLink: {
            borderBottom: '4px solid #2196F3',
        },
        btn: {
            height: '5rem',
            fontSize: '1.1rem !important',
        },
        menu: {
            display: 'none !important',
            [theme.breakpoints.down('md')]: {
                display: 'block !important',
            },
        },
    };
});

function Navbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar className={classes.toolbar}>
                    <img src={logo} alt="logo" className={classes.logo} />
                    <Box className={classes.btnContainer}>
                        <NavLink
                            exact
                            to="/"
                            activeClassName={classes.activeLink}
                            className={classes.links}
                        >
                            <Button className={classes.btn}>
                                Teams & Players
                            </Button>
                        </NavLink>
                        <NavLink
                            to="/favourites"
                            activeClassName={classes.activeLink}
                            className={classes.links}
                        >
                            <Button className={classes.btn}>Favourites</Button>
                        </NavLink>
                        <NavLink
                            to="/comparison"
                            activeClassName={classes.activeLink}
                            className={classes.links}
                        >
                            <Button className={classes.btn}>
                                Compare Players
                            </Button>
                        </NavLink>
                    </Box>
                    <IconButton
                        className={classes.menu}
                        size="large"
                        onClick={handleClick}
                    >
                        <MenuIcon fontSize="large" />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose} className={classes.menu}>
                        <MenuItem>
                            <NavLink
                                exact
                                to="/"
                                activeClassName={classes.activeLink}
                                className={classes.links}
                            >
                                Teams & Players
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink
                                to="/favourites"
                                activeClassName={classes.activeLink}
                                className={classes.links}
                            >
                                Favourites
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink
                                to="/comparison"
                                activeClassName={classes.activeLink}
                                className={classes.links}
                            >
                                Compare Players
                            </NavLink>
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
