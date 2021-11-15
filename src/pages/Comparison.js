import { Add } from '@mui/icons-material';
import {
    Avatar,
    IconButton,
    ListItemAvatar,
    ListItemText,
    Menu,
    MenuItem,
    MenuList,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import PlayerColumn from '../components/PlayerColumn';
import { AppContext } from '../context/AppContext';

const useStyles = makeStyles((theme) => {
    return {
        container: {
            width: '100%',
            height: '80vh',
            display: 'flex',
            justifyContent: 'flex-start',
            // alignItems: 'flex-start',
        },
        players: {
            display: 'flex',
            alignItems: 'center',
        },
        emptyBox: {
            width: '12rem',
            height: "8rem",
        },
        playerInfo: {
            width: '8rem',
            height: '8rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        headings: {
            width: '15rem',
        },
    };
});

function Comparison() {
    const classes = useStyles();

    const { favourites } = useContext(AppContext);

    const [comparisonList, setComparisonList] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleItemClick = (player) => {
        if (comparisonList.length) {
            if (comparisonList.find((item) => item.id === player.id)) {
                setAnchorEl(null);
            } else {
                setComparisonList([...comparisonList, player]);
            }
        } else {
            setComparisonList([...comparisonList, player]);
        }
        setAnchorEl(null);
    };

    console.log(comparisonList);

    return (
        <Box className={classes.container}>
            <Box>
                <Box className={classes.emptyBox}></Box>
                <Box className={classes.headings}>
                    <Typography variant="h6">Index</Typography>
                    <Typography variant="h6">Goals</Typography>
                    <Typography variant="h6">Asists</Typography>
                    <Typography variant="h6">Shots</Typography>
                    <Typography variant="h6">Passes</Typography>
                    <Typography variant="h6">Crosses</Typography>
                    <Typography variant="h6">Key Passes</Typography>
                    <Typography variant="h6">Smart Passes</Typography>
                    <Typography variant="h6">Touch in Box</Typography>
                    <Typography variant="h6" color="yellow">
                        Yellow Cards
                    </Typography>
                    <Typography variant="h6" color="red">
                        Red Cards
                    </Typography>
                </Box>
            </Box>
            <Box>
                <PlayerColumn comparisonList={comparisonList} />
                <IconButton size="large" onClick={handleMenuClick}>
                    <Add fontSize="large" />
                </IconButton>
                <Menu
                    open={open}
                    anchorEl={anchorEl}
                    onClose={() => setAnchorEl(null)}
                >
                    <MenuList>
                        {favourites.length ? (
                            favourites.map((favourite) => {
                                return (
                                    <MenuItem
                                        onClick={() =>
                                            handleItemClick(favourite)
                                        }
                                        key={favourite.id}
                                    >
                                        <ListItemAvatar>
                                            <Avatar src={favourite.image} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={favourite.shortName}
                                            secondary={favourite.role.name}
                                        />
                                    </MenuItem>
                                );
                            })
                        ) : (
                            <MenuItem>
                                <ListItemText primary="Your favourite list is empty." />
                            </MenuItem>
                        )}
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    );
}

export default Comparison;
